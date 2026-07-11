// Ram Ready Financial Futures — Approved Story Fragments
//
// Bounded personalization: every fragment below is prewritten and reviewed.
// The personalization engine (assets/personalization-engine.js) selects a
// fragment for a given narrative "slot" based on the learner's profile tags.
// An optional local LLM (llm/webllm-provider.js) may smooth the joins between
// fragments and resolve names/pronouns, but it may never write new fragments,
// facts, numbers, or consequences. See docs/PERSONALIZATION_MODEL.md.
//
// Fragment shape:
//   { slot, matchTags: [tag,...], text, note? }
// `text` may use tokens: {{name}}, {{subject}}, {{object}}, {{possessive}}
// A slot always has a "generic" fragment (matchTags: ["generic"]) as the
// no-preference fallback. Selection order: first tag match in profile order,
// else "generic".

export const STORY_FRAGMENTS = [
  // ---- Episode 1: name, values, broad life vision ----
  { slot: "ep01.opening_detail", matchTags: ["generic"],
    text: "{{name}} settles into a dorm room with a laptop, a half-unpacked duffel bag, and a class schedule that still feels unreal." },
  { slot: "ep01.opening_detail", matchTags: ["building_something_lasting"],
    text: "{{name}} keeps thinking past this semester — toward the kind of life {{subject}} wants to still be proud of in twenty years." },
  { slot: "ep01.opening_detail", matchTags: ["community_impact", "service"],
    text: "{{name}} already knows {{subject}} wants a life that leaves a place better than {{possessive}} found it, even before the paychecks start." },
  { slot: "ep01.opening_detail", matchTags: ["still_figuring_it_out"],
    text: "{{name}} hasn't figured out the big picture yet, and that's fine — the first weeks of college are exactly the place to start asking." },

  // ---- Episode 2: work model and banking needs ----
  { slot: "ep02.banking_detail", matchTags: ["generic"],
    text: "Between a part-time job and financial aid deposits, {{name}} needs an account {{subject}} can actually trust." },
  { slot: "ep02.banking_detail", matchTags: ["business_entrepreneurship"],
    text: "{{name}} is already thinking about someday separating a business account from a personal one — but for now, the personal account comes first." },
  { slot: "ep02.banking_detail", matchTags: ["privacy"],
    text: "{{name}} cares about {{possessive}} financial privacy and wants to understand exactly who can see and access this account." },

  // ---- Episode 3: career direction and first paycheck ----
  { slot: "ep03.paycheck_context", matchTags: ["generic"],
    text: "{{name}}'s first real pay stub arrives, and the number on it is smaller than {{subject}} expected." },
  { slot: "ep03.paycheck_context", matchTags: ["creative_or_athletic"],
    text: "{{name}} picks up shifts around practice and rehearsal schedules, so this first pay stub reflects a patchwork of hours." },
  { slot: "ep03.paycheck_context", matchTags: ["basketball"],
    text: "Between morning conditioning and a campus job, {{name}} budgets time as carefully as money — the pay stub is the easy part to read." },
  { slot: "ep03.paycheck_context", matchTags: ["contract_gig"],
    text: "{{name}}'s first work is gig-based, so there's no traditional pay stub yet — just a 1099 conversation waiting down the road." },

  // ---- Episode 4: lifestyle and housing preferences ----
  { slot: "ep04.budget_context", matchTags: ["generic"],
    text: "{{name}} lays out a semester's worth of expenses and starts sorting what's fixed, what's flexible, and what's a surprise." },
  { slot: "ep04.budget_context", matchTags: ["travel", "travel_frequently"],
    text: "{{name}} wants room in the budget for a trip home and maybe one spring getaway with friends." },
  { slot: "ep04.budget_context", matchTags: ["family"],
    text: "{{name}} is also sending a little money home some months, which changes how the budget has to flex." },

  // ---- Episode 6: family, support system, emergency scenario ----
  { slot: "ep06.emergency_context", matchTags: ["generic"],
    text: "A surprise expense lands in {{name}}'s lap in the middle of the semester, with no warning attached." },
  { slot: "ep06.emergency_context", matchTags: ["family"],
    text: "{{name}}'s family calls with their own emergency, and {{subject}} has to decide how much {{subject}} can realistically help." },
  { slot: "ep06.emergency_context", matchTags: ["basketball", "other_sports", "fitness_martial_arts"],
    text: "A minor sports injury means an unplanned copay and a week of missed shifts for {{name}}." },

  // ---- Episode 7: location and transportation preference ----
  { slot: "ep07.transportation_context", matchTags: ["generic"],
    text: "{{name}} weighs how to get to class, work, and everywhere in between." },
  { slot: "ep07.transportation_context", matchTags: ["live_in_rural"],
    text: "Where {{name}} is from, there's no real public transit, so a working vehicle isn't optional the way it might be in a city." },
  { slot: "ep07.transportation_context", matchTags: ["live_in_city"],
    text: "{{name}} is picturing city life after graduation, where transit and walkability might change the transportation math entirely." },

  // ---- Episode 8: major, career, and education choices ----
  { slot: "ep08.career_context", matchTags: ["generic"],
    text: "{{name}} is choosing a major and starting to picture what comes after it." },
  { slot: "ep08.career_context", matchTags: ["research_science"],
    text: "{{name}} is drawn to research and science coursework, and starts asking how that path connects to real career earnings." },
  { slot: "ep08.career_context", matchTags: ["skilled_trades"],
    text: "{{name}} is weighing a skilled-trade credential against a four-year degree, and wants real numbers instead of assumptions." },
  { slot: "ep08.career_context", matchTags: ["healthcare"],
    text: "{{name}} is considering a healthcare pathway and wants to understand the tradeoffs between program length, licensing, and pay." },
  { slot: "ep08.career_context", matchTags: ["public_service"],
    text: "{{name}} feels pulled toward public service work, where pay may be modest but benefits and mission both matter." },

  // ---- Episode 10: work type and benefits ----
  { slot: "ep10.benefits_context", matchTags: ["generic"],
    text: "{{name}} gets a job offer and has to compare more than just the salary line." },
  { slot: "ep10.benefits_context", matchTags: ["mixed_income"],
    text: "{{name}} is stitching together more than one income stream, so benefits from any single employer matter even more." },

  // ---- Episode 12: risk comfort and short-term goals ----
  { slot: "ep12.risk_context", matchTags: ["generic"],
    text: "{{name}} has some savings building up and has to decide where it should sit." },
  { slot: "ep12.risk_context", matchTags: ["stability"],
    text: "{{name}} values stability above all, and that shapes how {{subject}} thinks about risk." },
  { slot: "ep12.risk_context", matchTags: ["ownership", "luxury_experiences"],
    text: "{{name}} is impatient to grow this money faster, and has to weigh that against the risk of loss." },

  // ---- Episode 14: entrepreneurship interest ----
  { slot: "ep14.business_context", matchTags: ["generic"],
    text: "A friend pitches {{name}} on a small side business, and {{subject}} has to think it through." },
  { slot: "ep14.business_context", matchTags: ["business_entrepreneurship"],
    text: "{{name}} has wanted to start something for a while, and this feels like the moment to test the idea for real." },
  { slot: "ep14.business_context", matchTags: ["cooking_hospitality"],
    text: "{{name}}'s idea centers on food — a pop-up, a catering side gig, something {{subject}}'s always loved doing for others." },
  { slot: "ep14.business_context", matchTags: ["music", "film_photography_visual_arts"],
    text: "{{name}} has been quietly getting paid for creative work on the side, and it's starting to look like an actual business." },

  // ---- Episode 16: housing preference ----
  { slot: "ep16.housing_context", matchTags: ["generic"],
    text: "{{name}} is thinking ahead to life after graduation and where {{subject}} might live." },
  { slot: "ep16.housing_context", matchTags: ["own_home_someday"],
    text: "{{name}} has always pictured owning a home someday, and starts wondering what that would actually take." },
  { slot: "ep16.housing_context", matchTags: ["rent_for_flexibility"],
    text: "{{name}} likes the idea of staying flexible and isn't in a hurry to buy anything." },
  { slot: "ep16.housing_context", matchTags: ["multigenerational_household"],
    text: "{{name}}'s family has always shared a household across generations, and that's part of {{possessive}} housing picture too." },

  // ---- Episode 18: relationship and family vision ----
  { slot: "ep18.relationship_context", matchTags: ["generic"],
    text: "{{name}} thinks about the people {{subject}} shares money decisions with, now and later." },
  { slot: "ep18.relationship_context", matchTags: ["marriage_someday", "long_term_partnership"],
    text: "{{name}} pictures building a financial life with a partner someday, and wants to understand how shared money actually works." },
  { slot: "ep18.relationship_context", matchTags: ["focus_on_being_single"],
    text: "{{name}} is planning around a single life for now, and wants a financial picture that stands fully on its own." },
  { slot: "ep18.relationship_context", matchTags: ["children_someday"],
    text: "{{name}} imagines having kids down the road, which adds a long-term line item to think about early." },
  { slot: "ep18.relationship_context", matchTags: ["no_children"],
    text: "{{name}} doesn't plan on having kids, which shapes {{possessive}} long-term picture differently than it might for someone else." },

  // ---- Episode 20: financial goal and prior decisions ----
  { slot: "ep20.capstone_context", matchTags: ["generic"],
    text: "{{name}} sits down to look at the whole shape of the plan {{subject}}'s been building, episode by episode." },
  { slot: "ep20.capstone_context", matchTags: ["reach_one_million"],
    text: "{{name}} has had a $1 million net worth in the back of {{possessive}} mind this whole time, and now gets to stress-test it." },
  { slot: "ep20.capstone_context", matchTags: ["explore_1_5_million_path"],
    text: "{{name}} wants to see what a $1.5 million path could look like under a few different assumptions." },
  { slot: "ep20.capstone_context", matchTags: ["no_number_goal"],
    text: "{{name}} never cared much about hitting a specific number, and this capstone lets {{object}} define success on {{possessive}} own terms." },

  // ---- Wealth Quest 2: high-income career or business interest ----
  { slot: "q02.context", matchTags: ["generic"],
    text: "A fictional professional in this quest built durable wealth slowly, on a strong but unremarkable salary." },
  { slot: "q02.context", matchTags: ["business_entrepreneurship"],
    text: "This quest's fictional founder took years of thin margins before the business ever created real personal wealth." },

  // ---- Wealth Quest 3: sports/entertainment/creator interest ----
  { slot: "q03.context", matchTags: ["basketball", "other_sports", "fitness_martial_arts"],
    text: "This quest follows a fictional athlete whose playing career — like most — lasted only a handful of years." },
  { slot: "q03.context", matchTags: ["music", "film_photography_visual_arts"],
    text: "This quest follows a fictional performer whose income arrived in an unpredictable, lump-sum rhythm." },
  { slot: "q03.context", matchTags: ["generic"],
    text: "This quest follows a fictional public figure whose visible success masked real financial fragility." },

  // ---- Wealth Quest 4: entrepreneurship ----
  { slot: "q04.context", matchTags: ["business_entrepreneurship"],
    text: "{{name}} has already imagined scaling a business — this quest shows what equity and dilution actually mean once it grows." },
  { slot: "q04.context", matchTags: ["generic"],
    text: "This quest examines a fictional business owner deciding whether to reinvest, take on partners, or eventually sell." },

  // ---- Wealth Quest 6: privacy, service, or luxury preferences ----
  { slot: "q06.context", matchTags: ["privacy"],
    text: "{{name}}'s preference for privacy makes this quest's look at private banking especially relevant." },
  { slot: "q06.context", matchTags: ["luxury_experiences"],
    text: "{{name}}'s interest in a richer lifestyle makes it worth understanding what private banking does — and doesn't — guarantee." },
  { slot: "q06.context", matchTags: ["generic"],
    text: "This quest unpacks what \"private banking\" actually means as a service, not a guarantee of safety." },

  // ---- Wealth Quest 10: family and generosity preferences ----
  { slot: "q10.context", matchTags: ["family", "generosity"],
    text: "{{name}}'s focus on family and giving connects directly to this quest's look at estate planning and charitable tools." },
  { slot: "q10.context", matchTags: ["generic"],
    text: "This quest looks at how families pass on assets — and how giving strategies actually work." },

  // ---- Wealth Quest 15: visibility, security, social impact ----
  { slot: "q15.context", matchTags: ["privacy"],
    text: "{{name}} has cared about privacy from the start — this quest shows what happens when wealth makes that harder to protect." },
  { slot: "q15.context", matchTags: ["community_impact", "service"],
    text: "{{name}}'s pull toward community impact makes this quest's look at public responsibility especially relevant." },
  { slot: "q15.context", matchTags: ["generic"],
    text: "This quest examines the security and reputational tradeoffs that come with visible wealth." },

  // ---- Wealth Quest 19: generosity and community impact ----
  { slot: "q19.context", matchTags: ["generosity", "community_impact"],
    text: "{{name}}'s values around generosity and community are exactly what this quest puts under a critical lens." },
  { slot: "q19.context", matchTags: ["generic"],
    text: "This quest asks what philanthropy can and cannot fix, and who gets a voice in that decision." },

  // ---- Wealth Quest 20: all selected values and goals ----
  { slot: "q20.context", matchTags: ["generic"],
    text: "{{name}} steps into the final simulation carrying everything learned across both paths." },
  { slot: "q20.context", matchTags: ["building_something_lasting"],
    text: "{{name}}'s drive to build something lasting is tested directly by this final, high-stakes simulation." }
];

export function selectFragment(slot, profileTags = []) {
  const candidates = STORY_FRAGMENTS.filter((f) => f.slot === slot);
  for (const tag of profileTags) {
    const match = candidates.find((f) => f.matchTags.includes(tag));
    if (match) return match;
  }
  return candidates.find((f) => f.matchTags.includes("generic")) || null;
}
