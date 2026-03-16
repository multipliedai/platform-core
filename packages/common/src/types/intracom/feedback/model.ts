export type FeedbackCategory = 'Transcription' | 'Activity Creation' | 'Signal Identification' | 'Desk Identification' | 'Others';

export interface IntracomFeedback {
  id: string;
  userId: string;
  organizationId: string;
  feedbackType: 'up' | 'down';
  feedbackText?: string;
  categories?: FeedbackCategory[];
  rawTranscript?: string;
  selectedSignals: {
    id: string;
    message: string;
  }[];
  incident?: {
    id: string;
    title?: string;
  };
  createdAt: number;
  updatedAt: number;
}