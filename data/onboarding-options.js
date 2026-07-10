// Ram Ready Financial Futures — Vision-Casting Onboarding Options
// Every question includes a "skip" value. No real financial information is
// ever requested. Selections only unlock prewritten, approved story
// fragments — see data/story-fragments.js and docs/PERSONALIZATION_MODEL.md.

export const CHARACTER_PRESENTATIONS = [
  { id: "man", label: "Play as a man", pronouns: { subject: "he", object: "him", possessive: "his" } },
  { id: "woman", label: "Play as a woman", pronouns: { subject: "she", object: "her", possessive: "her" } }
  // Additional presentations can be added here without rewriting curriculum —
  // every story fragment keys off pronoun tokens, not a hardcoded gender.
];

export const AVATAR_STYLES = [
  { id: "avatar-1", label: "Sunrise", description: "Warm gold and blue geometric illustration" },
  { id: "avatar-2", label: "Skyline", description: "Cool blue cityscape-inspired illustration" },
  { id: "avatar-3", label: "Trailblazer", description: "Bold gold trail-and-star illustration" },
  { id: "avatar-4", label: "Fieldnote", description: "Soft green and blue notebook-style illustration" }
];

export const VALUES_OPTIONS = [
  "stability", "flexibility", "family", "creativity", "ownership", "service",
  "travel", "privacy", "community_impact", "generosity", "comfortable_lifestyle",
  "luxury_experiences", "building_something_lasting", "still_figuring_it_out"
].map((id) => ({ id, label: labelize(id) }));

export const INTEREST_OPTIONS = [
  "basketball", "football", "other_sports", "fitness_martial_arts",
  "gaming_technology", "research_science", "business_entrepreneurship",
  "music", "film_photography_visual_arts", "cooking_hospitality",
  "education", "healthcare", "public_service", "skilled_trades",
  "nature_travel", "community_service", "undecided"
].map((id) => ({ id, label: labelize(id) }));

export const CAREER_DIRECTION_OPTIONS = [
  "w2_salaried", "hourly", "contract_gig", "business_ownership",
  "creative_or_athletic", "public_service", "mixed_income", "undecided"
].map((id) => ({ id, label: labelize(id) }));

export const LIFE_VISION_OPTIONS = [
  "rent_for_flexibility", "own_home_someday", "multigenerational_household",
  "live_in_city", "live_in_suburb", "live_in_rural", "travel_frequently",
  "marriage_someday", "long_term_partnership", "focus_on_being_single",
  "children_someday", "no_children", "unsure", "skip"
].map((id) => ({ id, label: labelize(id) }));

export const FINANCIAL_GOAL_OPTIONS = [
  "understand_basics", "stop_paycheck_to_paycheck", "build_emergency_fund",
  "become_debt_free", "buy_a_home", "retire_comfortably", "build_a_business",
  "reach_one_million", "explore_1_5_million_path", "understand_very_wealthy_management",
  "no_number_goal"
].map((id) => ({ id, label: labelize(id) }));

export const STARTING_INCOME_OPTIONS = [
  "no_current_income", "part_time_income", "entry_level_full_time",
  "variable_income", "generic_example"
].map((id) => ({ id, label: labelize(id) }));

export const STARTING_SAVINGS_OPTIONS = [
  "zero", "under_500", "500_to_2000", "2000_to_10000", "generic_example"
].map((id) => ({ id, label: labelize(id) }));

export const STARTING_DEBT_OPTIONS = [
  "no_debt", "low_balance", "moderate_balance", "high_balance",
  "student_loans_only", "generic_example"
].map((id) => ({ id, label: labelize(id) }));

function labelize(id) {
  const overrides = {
    community_impact: "Community impact",
    comfortable_lifestyle: "Comfortable lifestyle",
    luxury_experiences: "Luxury experiences",
    building_something_lasting: "Building something that lasts",
    still_figuring_it_out: "Still figuring it out",
    other_sports: "Other sports",
    fitness_martial_arts: "Fitness or martial arts",
    gaming_technology: "Gaming and technology",
    research_science: "Research and science",
    business_entrepreneurship: "Business and entrepreneurship",
    film_photography_visual_arts: "Film, photography, or visual arts",
    cooking_hospitality: "Cooking and hospitality",
    public_service: "Public service",
    skilled_trades: "Skilled trades",
    nature_travel: "Nature and travel",
    community_service: "Community service",
    w2_salaried: "W-2 salaried career",
    contract_gig: "Contract or gig work",
    business_ownership: "Business ownership",
    creative_or_athletic: "Creative or athletic career",
    mixed_income: "Mixed income",
    rent_for_flexibility: "Rent for flexibility",
    own_home_someday: "Own a home someday",
    multigenerational_household: "Multigenerational household",
    live_in_city: "Live in a city",
    live_in_suburb: "Live in a suburb",
    live_in_rural: "Live in a rural community",
    travel_frequently: "Travel frequently",
    marriage_someday: "Marriage someday",
    long_term_partnership: "Long-term partnership",
    focus_on_being_single: "Focus on being single",
    children_someday: "Children someday",
    no_children: "No children",
    skip: "Skip this section",
    understand_basics: "Understand the basics",
    stop_paycheck_to_paycheck: "Stop living paycheck to paycheck",
    build_emergency_fund: "Build an emergency fund",
    become_debt_free: "Become debt-free",
    buy_a_home: "Buy a home",
    retire_comfortably: "Retire comfortably",
    build_a_business: "Build a business",
    reach_one_million: "Reach a theoretical $1 million net worth",
    explore_1_5_million_path: "Explore a theoretical $1.5 million path",
    understand_very_wealthy_management: "Understand how very wealthy households manage assets",
    no_number_goal: "I do not have a number-based goal",
    no_current_income: "No current income",
    part_time_income: "Part-time income",
    entry_level_full_time: "Entry-level full-time income",
    variable_income: "Variable income",
    generic_example: "Use a generic example",
    zero: "Starting at $0",
    under_500: "Less than $500",
    "500_to_2000": "$500–$2,000",
    "2000_to_10000": "$2,000–$10,000",
    no_debt: "No debt",
    low_balance: "Low balance",
    moderate_balance: "Moderate balance",
    high_balance: "High balance",
    student_loans_only: "Student loans only"
  };
  if (overrides[id]) return overrides[id];
  return id
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export const SKIP_VALUE = "skip";

export const ONBOARDING_SCREENS = [
  "character", "values", "interests", "career_direction",
  "life_vision", "financial_goal", "starting_ranges", "preview"
];
