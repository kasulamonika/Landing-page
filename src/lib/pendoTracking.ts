/**
 * Pendo Track Event utilities for CareerG1.
 *
 * Each exported function wraps a single pendo.track() call so that event names
 * and property shapes are defined in one place.  Functions guard against the
 * Pendo agent not being loaded yet.
 */

declare global {
  interface Window {
    pendo?: {
      track: (eventName: string, properties?: Record<string, unknown>) => void;
    };
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function track(eventName: string, properties?: Record<string, unknown>): void {
  try {
    if (typeof window !== 'undefined' && window.pendo) {
      window.pendo.track(eventName, properties ?? {});
    }
  } catch {
    // Never let tracking break the application
  }
}

// Module-level dedup sets for one-time-per-session events
const trackedDemoViews = new Set<string>();

// ---------------------------------------------------------------------------
// Event 1 – CTA "Get Started" clicked on the landing page
// ---------------------------------------------------------------------------
export function trackCtaGetStartedClicked(properties: {
  referral_source?: string;
  user_type?: string;
  landing_page_variant?: string;
  scroll_depth_at_click?: number;
} = {}): void {
  track('cta_get_started_clicked', properties);
}

// ---------------------------------------------------------------------------
// Event 2 – Assessment completed
// TODO: Call this when the assessment feature is implemented.
// ---------------------------------------------------------------------------
export function trackAssessmentCompleted(properties: {
  assessment_type?: string;
  completion_time_seconds?: number;
  questions_answered?: number;
  personality_profile_type?: string;
  strengths_identified_count?: number;
  user_grade_level?: string;
} = {}): void {
  track('assessment_completed', properties);
}

// ---------------------------------------------------------------------------
// Event 3 – Career recommendations generated
// TODO: Call this when the recommendation engine is implemented.
// ---------------------------------------------------------------------------
export function trackCareerRecommendationsGenerated(properties: {
  recommendations_count?: number;
  career_paths_suggested?: number;
  colleges_suggested?: number;
  match_confidence_score?: number;
  assessment_id?: string;
  user_profile_completeness?: number;
} = {}): void {
  track('career_recommendations_generated', properties);
}

// ---------------------------------------------------------------------------
// Event 4 – Learning pathway enrolled
// TODO: Call this when learning pathway enrollment is implemented.
// ---------------------------------------------------------------------------
export function trackLearningPathwayEnrolled(properties: {
  pathway_name?: string;
  pathway_id?: string;
  skill_area?: string;
  estimated_duration?: string;
  course_count?: number;
  difficulty_level?: string;
  recommended_by_assessment?: boolean;
} = {}): void {
  track('learning_pathway_enrolled', properties);
}

// ---------------------------------------------------------------------------
// Event 5 – Learning pathway completed
// TODO: Call this when learning pathway completion tracking is implemented.
// ---------------------------------------------------------------------------
export function trackLearningPathwayCompleted(properties: {
  pathway_name?: string;
  pathway_id?: string;
  completion_time_days?: number;
  courses_completed?: number;
  skills_acquired?: number;
  final_assessment_score?: number;
  pathway_difficulty?: string;
} = {}): void {
  track('learning_pathway_completed', properties);
}

// ---------------------------------------------------------------------------
// Event 6 – College & scholarship search executed
// TODO: Call this when the search feature is implemented.
// ---------------------------------------------------------------------------
export function trackCollegeScholarshipSearchExecuted(properties: {
  search_query?: string;
  filters_applied?: number;
  results_count?: number;
  filter_by_ranking?: boolean;
  filter_by_location?: string;
  filter_by_field_of_study?: string;
  scholarship_filter_active?: boolean;
  sort_order?: string;
} = {}): void {
  track('college_scholarship_search_executed', properties);
}

// ---------------------------------------------------------------------------
// Event 7 – Mentor match requested
// TODO: Call this when the mentorship matching feature is implemented.
// ---------------------------------------------------------------------------
export function trackMentorMatchRequested(properties: {
  mentor_expertise_area?: string;
  mentorship_type?: string;
  session_type?: string;
  user_career_interest?: string;
  mentor_id?: string;
  request_reason?: string;
} = {}): void {
  track('mentor_match_requested', properties);
}

// ---------------------------------------------------------------------------
// Event 8 – Mentor session completed
// TODO: Call this when mentorship session tracking is implemented.
// ---------------------------------------------------------------------------
export function trackMentorSessionCompleted(properties: {
  mentor_id?: string;
  session_duration_minutes?: number;
  session_type?: string;
  topics_covered?: string;
  student_rating?: number;
  follow_up_scheduled?: boolean;
} = {}): void {
  track('mentor_session_completed', properties);
}

// ---------------------------------------------------------------------------
// Event 9 – Analytics report generated
// TODO: Call this when the analytics dashboard is implemented.
// ---------------------------------------------------------------------------
export function trackAnalyticsReportGenerated(properties: {
  report_type?: string;
  user_role?: string;
  date_range?: string;
  metrics_included?: number;
  student_count?: number;
  export_format?: string;
} = {}): void {
  track('analytics_report_generated', properties);
}

// ---------------------------------------------------------------------------
// Event 10 – User signup completed
// TODO: Call this when the signup/authentication flow is implemented.
// ---------------------------------------------------------------------------
export function trackUserSignupCompleted(properties: {
  signup_method?: string;
  user_type?: string;
  referral_source?: string;
  landing_page_variant?: string;
  device_type?: string;
} = {}): void {
  track('user_signup_completed', properties);
}

// ---------------------------------------------------------------------------
// Event 11 – Demo showcase viewed (deduplicated per session)
// ---------------------------------------------------------------------------
export function trackDemoShowcaseViewed(properties: {
  demo_name: string;
  time_spent_seconds?: number;
  scroll_depth_percent?: number;
  interactions_count?: number;
  referral_source?: string;
}): void {
  if (trackedDemoViews.has(properties.demo_name)) return;
  trackedDemoViews.add(properties.demo_name);
  track('demo_showcase_viewed', properties);
}

// ---------------------------------------------------------------------------
// Event 12 – Onboarding journey completed
// TODO: Call this when the 4-step onboarding workflow is implemented.
// ---------------------------------------------------------------------------
export function trackOnboardingJourneyCompleted(properties: {
  total_onboarding_time_minutes?: number;
  steps_completed?: number;
  assessment_type_taken?: string;
  recommendations_received_count?: number;
  pathway_selected?: string;
  user_type?: string;
} = {}): void {
  track('onboarding_journey_completed', properties);
}
