'use server';

/**
 * @fileOverview Provides personalized follow-up suggestions based on the portfolio site information.
 *
 * - suggestFollowUp - A function that generates follow-up suggestions.
 * - SuggestFollowUpInput - The input type for the suggestFollowUp function.
 * - SuggestFollowUpOutput - The return type for the suggestFollowUp function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestFollowUpInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the person sending the message.'),
  message: z.string().describe('The message sent through the contact form.'),
  aboutSection: z.string().describe('The content of the about section from the portfolio site.'),
  projectsSection: z.string().describe('The content of the projects section from the portfolio site.'),
  skillsSection: z.string().describe('The content of the skills section from the portfolio site.'),
});
export type SuggestFollowUpInput = z.infer<typeof SuggestFollowUpInputSchema>;

const SuggestFollowUpOutputSchema = z.object({
  followUpSuggestion: z.string().describe('A personalized follow-up suggestion based on the portfolio information and the user message.'),
});
export type SuggestFollowUpOutput = z.infer<typeof SuggestFollowUpOutputSchema>;

export async function suggestFollowUp(input: SuggestFollowUpInput): Promise<SuggestFollowUpOutput> {
  return suggestFollowUpFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestFollowUpPrompt',
  input: {schema: SuggestFollowUpInputSchema},
  output: {schema: SuggestFollowUpOutputSchema},
  prompt: `You are an AI assistant designed to provide personalized follow-up suggestions for job seekers.

  Based on the information provided from the portfolio site and the user's message, suggest a personalized follow-up message.

  Here is the information from the portfolio site:
  About Section: {{{aboutSection}}}
  Projects Section: {{{projectsSection}}}
  Skills Section: {{{skillsSection}}}

  Here is the user's message:
  Name: {{{name}}}
  Email: {{{email}}}
  Message: {{{message}}}

  Provide a concise and professional follow-up suggestion that the user can use to increase their chances of getting a positive response.
  The follow up suggestion should not include any salutations or closings.
  It should be no more than two sentences.

  Follow-up Suggestion: `,
});

const suggestFollowUpFlow = ai.defineFlow(
  {
    name: 'suggestFollowUpFlow',
    inputSchema: SuggestFollowUpInputSchema,
    outputSchema: SuggestFollowUpOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
