---
layout: educator-page
title: "In the Classroom"
permalink: /educators/in-the-classroom/
educator_nav: in-the-classroom
---

This page is the lesson plan. There is one plan for each of the six stages, written for a teacher delivering this in a classroom rather than a host running an event floor. It works best after reviewing the [Agenda]({{ site.baseurl }}/educators/agenda/) and then moving into the details inside each time block: what to say, when to pause, what to watch for, and how to keep the room moving without losing the learning.

## How to Use This Page

This page is designed for two kinds of use.

- use the quick scan below during live delivery when a fast reminder is more useful than full detail
- use the individual lesson plans during prep, co-teaching, or debrief

The most important pattern to protect across the session is simple: one clear action, one visible result, and one short explanation of what changed.

## Session at a Glance

| 60 min | 90 min | Block | Main goal | Protect this moment |
| --- | --- | --- | --- | --- |
| 5 | 10 | Welcome and launch | get everyone into the skillmap quickly | clear partner roles and a short tradeoff explanation |
| 8 | 10 | Join the Team | a car that moves and a dashboard in their own units | the system check, where a setting is proved rather than assumed |
| 10 | 12 | Design | a prediction said out loud before the bench runs | the prediction, taken before any result appears |
| 10 | 12 | Test | two runs that differ by exactly one thing | writing the baseline down before changing code |
| 8 | 12 | Analyze | a race turned into numbers | the guess before the session, read against the count after it |
| 8 | 12 | Decide | a call made before the outcome is known | the moment the rain arrives and the car slows |
| 8 | 17 | Race and Reflect | every system at once, then what it says about the student | the last four steps, where the result becomes a career connection |
| - | 15 | Remix or replay | let learners act on what they learned | one small change plus one replay or explanation |
| 3 | 5 | Closing | capture learning without losing energy | one choice, one effect, one next step |

The 60-minute classroom session is the primary format. At 45 minutes, stop after Analyze; at 30, stop after Test. Stages unlock in order, so a short session ends earlier rather than skipping a middle stage. Full budgets are on the [Agenda]({{ site.baseurl }}/educators/agenda/) page.

## Before Learners Begin

The room and devices should be ready before students start arriving. The launch should feel immediate.

- open the skillmap on the facilitator device and project the starting view
- confirm that at least one fallback device is ready in case a learner machine stalls
- decide where you want your first compare-and-explain pause to happen
- if devices are shared, post or say the roles clearly: **Driver** controls, **Navigator** reads and explains
- keep your opening explanation to under a minute so students reach action quickly

The opening should establish:

- this is a build-test-improve session
- there is not one perfect answer
- the goal is to notice what choices make better or harder

Suggested opening language:

"Today you are not trying to find one perfect answer. You are going to make choices, test them, and decide what those choices made better, harder, faster, safer, or more strategic."

## How to Keep the Whole Audience Involved

This session works best when learners are not just staring at screens waiting for the next instruction. Short, low-pressure participation moves help students predict, notice, compare, and connect.

- use quick partner talk before whole-group discussion so more students rehearse an answer
- ask for a show of hands, thumb vote, or one-word response when you need a fast room read
- invite students to name what they notice before you explain what it means
- use contrasting team examples so students compare strategies instead of waiting for a single correct answer
- keep participation short and frequent rather than saving all discussion for the end

Good whole-group prompts include:

- Which score lens do you think this team improved?
- Did this choice make the run faster, safer, cleaner, or smarter?
- Which team role would care about this result most?
- What should this team test next?

## STEM and Career Moves to Weave In

Career and STEM connections are strongest when they come from what students are already doing in the game. A separate mini-lesson is rarely necessary unless the room clearly needs it.

Short connections like these work well:

- when students tune speed, efficiency, or grip, name variables, constraints, and optimization
- when students react to collisions, pit stops, or weather, name data, feedback, and system response
- when students explain a result, name testing, iteration, and evidence-based decision-making
- when students debate which choice is better, name tradeoffs and engineering priorities

Nine people work on the team students join, and each one is attached to a decision the student makes rather than to a talk about jobs. One opens each stage and one closes it:

- **Kai, Operations Lead** and **Drew, UX Designer**: Join the Team, where the dashboard is set up and then proved
- **Riley, Performance Engineer**: Design, where speed is traded against efficiency
- **Jordan, Test Engineer**: Test, where one variable changes and two runs get compared
- **Casey, Telemetry Analyst**: Analyze, where a race becomes numbers
- **Morgan, Strategist** and **Avery, Sustainability Lead**: Decide, where the call is made before the outcome is known
- **Taylor, Systems Engineer**: Race and Reflect, where everything runs at once
- **Sam, Software Engineer** is the build lens. Sam voices the tutorial hints, and software engineer is one of four role lenses students choose in Design.

Their routes into the work, and a question to ask the room as each stage ends, are on the [Career Lenses]({{ site.baseurl }}/educators/career-lenses/) page. Read one aloud while the stage is still fresh rather than saving them all for the end.

## The Six Lesson Plans

### 1. Before You Start (5 minutes, 10 at 90)

Set the frame before anyone touches a tutorial.

- introduce the session as build, test, improve, rather than as a coding lesson
- confirm devices are open and the skillmap is loading
- explain a tradeoff in one plain sentence: making one thing better usually costs you somewhere else
- set partner roles if devices are shared, such as Driver and Navigator, and say when they will swap
- tell students they will meet nine people who do this for a living, and that the last stage tells them which one they acted like

By the end of this block students should know what they are building, who they are working with, and what to do first.

### 2. Join the Team

**Time:** 8 minutes, 10 at 90

**Students will be able to:** build a working car, save a team identity, and prove a setting is wired rather than typed.

**What they build, step by step:** Share The Mission, Build the Car, Test the Controls, Make It Yours, Set Up the Dashboard, Run a System Check.

**Key vocabulary:** sprite, event, variable, unit, dashboard.

**Career lens:** Kai, Operations Lead, opens. Drew, UX Designer, closes on the units decision.

#### Teaching it

Move fast to a car that answers the arrows, and name that out loud as the first success. Do not explain every block on the way there; answer only the block a student needs for their next move.

The stage's real content is the last step. The system check proves the dashboard readout follows the setting rather than repeating typed words. Have students change a unit dropdown and run it again so they watch the readout follow.

#### Questions to ask

- Which units does your driver actually think in?
- What would go wrong if the dashboard and the driver disagreed?
- How do you know that setting is really connected?

#### Where students get stuck

| What you will hear | What to do |
| --- | --- |
| My car will not move. | Check which sprite the controller block targets. It is almost always a naming mismatch. |
| My car design did not change. | Edit the image inside the existing `raceCar` block from step 2. A second sprite block customizes a different car. |
| The check shows the wrong name, or no units. | The name blocks must run in `on start` before menu is pressed. Units are on the **second** screen: press **A** to get past the first. |
| I typed mph and nothing changes. | The unit blocks have to be dragged into the splash, not typed as text. That is the bug this step is built to catch. |

#### Check for understanding

Every team can point at the menu readout and say which setting produced it.

#### If you have more time, and if you have less

- **Stretch:** ask students to predict what the check will report before running it.
- **Support:** leave the team name and car name at their defaults and spend the time on the units instead.

### 3. Design

**Time:** 10 minutes, 12 at 90

**Students will be able to:** make a prediction, write a tradeoff as a rule, and test it against data.

**What they build, step by step:** Make a Prediction, Tune Your Car, Measure the Change, Define the Tradeoff, Test the Results, See Through a Different Lens, Document the Decision.

**Key vocabulary:** prediction, variable, conditional, tradeoff, efficiency.

**Career lens:** Riley, Performance Engineer, opens and closes.

#### Teaching it

Take predictions out loud before anyone runs the bench. A prediction after the result is a story, not a test, and that distinction is the stage.

The garage bench runs a twenty-lap race by itself and reports a race time where lower wins. Have teams run 90 and then 110 and write both times down. The slower car usually wins, because pit stops cost more than lap time saves. Let them discover that rather than announcing it.

#### Questions to ask

- What will more speed cost you, and where will that cost show up?
- Why would the slower car finish twenty laps first?
- Your rule fires above 100. Where would you put that line, and why?

#### Where students get stuck

| What you will hear | What to do |
| --- | --- |
| My speed keeps reverting. | There is probably a second `set driveSpeed` block later in `on start`. There should be one, above `set base car speed`. |
| Changing the speed does nothing. | The variable has to be *inside* `set base car speed to`, not sitting above it. |
| I cannot find my variable in the toolbox. | The `set` block only appears once the variable exists. Use **Make a Variable** first, and check the spelling character by character. |
| My rule never fires. | `driveSpeed` has to be set before the `if` runs. The rule can only read a value that already exists. |
| The bench result looks wrong. | The bench block must come after the `if` rule so it reads final values, and the mission splash must be disconnected so it is not interrupting each run. |

#### Check for understanding

A team can state a prediction they made and say whether the bench agreed with it.

#### If you have more time, and if you have less

- **Stretch:** have them try 100, then 101, and explain why one point of speed changes the race so much.
- **Support:** give them the prediction as a sentence frame: more speed will help my ___ but cost my ___.

### 4. Test

**Time:** 10 minutes, 12 at 90

**Students will be able to:** run a controlled comparison and explain what one change cost.

**What they build, step by step:** Take It to the Track, Run the Baseline, Change One Variable, Run It Again, Compare the Results, Record What You Found.

**Key vocabulary:** baseline, variable, control, evidence, iteration.

**Career lens:** Jordan, Test Engineer, opens and closes.

#### Teaching it

This is the stage where students press **A** to stage the car at the line and wait for five lights. That standing start is deliberate, and it is the only stage that uses it.

Insist the baseline numbers are written down before any code changes. Steps 2 and 4 have no green checkmark, because the student is driving rather than coding: tell them so, or they will wait for one.

After the second run the comparison opens by itself and runs to more than one page. Students press **A** to turn each page and up to go back.

#### Questions to ask

- What is your baseline, and where is it written down?
- Your `driveSpeed` is 90. What did the dashboard say your top speed was?
- What did you change, and what did it cost?

#### Where students get stuck

| What you will hear | What to do |
| --- | --- |
| The track will not start. | `start vehicle test track` has to be the last block in `on start`, and not inside the `if` or a button event. |
| No report appeared. | Editing code while the car drives restarts the simulator and throws the run away. Let it end on its own. |
| No comparison appeared. | The comparison needs two runs that both ended on their own. Re-run the baseline, then the change. |
| I cannot find my menu block. | It is a separate block in the workspace, not inside `on start`. Right-click an empty area and choose **Clean up Blocks**. |
| There is no checkmark on this step. | Steps 2 and 4 are driving steps. There is no block to validate, so there is no checkmark. |

#### Check for understanding

Two runs, written down, that differ by exactly one thing, and a sentence naming what that thing cost.

#### If you have more time, and if you have less

- **Stretch:** ask them to predict the second run's time before driving it, then check how far off they were.
- **Support:** make the single change for them and let the work be reading the comparison.

### 5. Analyze

**Time:** 8 minutes, 12 at 90

**Students will be able to:** build the systems that record a race, and read the result against what they expected.

**What they build, step by step:** Start the Session, Count the Collisions, Add Traffic, Record Every Hit, Reward Clean Driving, Read the Data.

**Key vocabulary:** data, event, counter, telemetry, metric.

**Career lens:** Casey, Telemetry Analyst, opens and closes.

#### Teaching it

From this stage on, races stage themselves. The car rolls to the line, five lights count down, and a thirty-second countdown starts when they go out. Nothing to press. Students who learned the **A** press in Test will look for it, so say this once up front.

Before the first full session, make every team commit to a number: how many hits do you think you will take? The gap between that guess and the count is the whole stage.

Every session ends with a **Session over** report showing time, score, energy, and top speed, whether or not the student has built their own summary yet.

#### Questions to ask

- How many hits do you think you will take? Say a number before you drive.
- What did driving clean actually earn you?
- Which number would you show a teammate to prove the session went well?

#### Where students get stuck

| What you will hear | What to do |
| --- | --- |
| It is still on the test track. | `start race session` has to be the last block in `on start`, below `start vehicle test track`. |
| The race started without me. | It stages itself now. The **A** press belongs to Test, where the standing start is the thing being measured. |
| Both my counter blocks say the same name. | The `set` block has a dropdown. Change the second one to `lastCollisionCount`. |
| The reward fires at the wrong time. | `lastCollisionCount` must be set at the end of the block, and the comparison must use `=`. |
| Nothing happens when the countdown ends. | The dropdown in `on [track] session ends` must match the stage the `start race session` block uses. |

#### Check for understanding

A team can compare their guess to their collision count and say which was closer to the truth.

#### If you have more time, and if you have less

- **Stretch:** have them change the spawn interval and explain the effect on both score and energy.
- **Support:** run the session once as a whole class first, with nobody coding, so the rhythm is familiar.

### 6. Decide

**Time:** 8 minutes, 12 at 90

**Students will be able to:** make a strategic call before the outcome is known, then test it against the alternative.

**What they build, step by step:** Change the Conditions, Count Pit Stops, Open the Pit Lane, Make the Pit Call, Adjust for Grip, Add Puddles, Reward Adapting Well, Try Both Strategies.

**Key vocabulary:** strategy, condition, grip, resource, weather.

**Career lens:** Morgan, Strategist, opens. Avery, Sustainability Lead, closes on how the energy was spent.

#### Teaching it

This session runs twenty-five seconds instead of thirty, and the rain arrives part way through. When it does, the sky turns gray, the road darkens, rain streaks the screen, and a banner names it.

The grip rule students write then lowers the car's top speed, which they can watch fall in the corner readout. Point at that: the car is slower because of a rule they wrote, not because the game punished them.

Pit markers come up the road and have to be steered onto. If time allows, run the session twice, once taking every stop and once skipping them all, and compare strategy points.

#### Questions to ask

- Did you pit? What made you decide, and how early did you decide it?
- Your car is slower in the rain. Is that the game, or your own rule working?
- Would a different setup have made the other call right?

#### Where students get stuck

| What you will hear | What to do |
| --- | --- |
| Where did the obstacles go? | The Analyze spawner is gated to the track stage, so it stays off here. Puddles arrive in step 6. |
| I keep missing the pit markers. | Once a marker passes the car it is gone, and the next is eight seconds away. Decide early, while it is still up the road. |
| I did not earn the adapting point. | It needs both conditions: the rain must have arrived, and one collision or fewer. Puddles count as collisions. |
| My pit call rewards the wrong thing. | Above 100 is a Pace setup and earns points; 100 or below is Balance and wins back energy. Check which setup the team is actually running. |

#### Check for understanding

A team can name the call they made, when they made it, and what it cost or won.

#### If you have more time, and if you have less

- **Stretch:** have them compare strategy points across both strategies and argue for one.
- **Support:** tell them which setup they are running so the pit call reads as a decision rather than a lookup.

### 7. Race and Reflect

**Time:** 8 minutes, 17 at 90

**Students will be able to:** run every system at once, then find their own decisions inside the result.

**What they build, step by step:** Start the Final Race, Add Risk, Add Recovery, Score the Race, Save the Final Run, Read the Summary, Choose a Next-Test Focus, Connect to a Role, Connect to a Career, Hand Off the Next Test.

**Key vocabulary:** system, integration, evidence, reflection, career.

**Career lens:** Taylor, Systems Engineer, opens. All nine roles close.

#### Teaching it

Nothing new is introduced here except pressure. Obstacles come faster, pit markers still appear, the rain still arrives, and every rule the student wrote runs at the same time.

Protect the last four steps. They are the payoff of the whole session, and they are the first thing a running-late room cuts. The stage ends by naming the next test to run, the role the student's decisions matched, and the career that role belongs to.

Read one mentor's route aloud from the Career Lenses page while the race is still fresh.

#### Questions to ask

- Which of your systems broke first under pressure?
- Which role did your decisions match? Is that the one you expected?
- What would you test first if we ran this again tomorrow?

#### Where students get stuck

| What you will hear | What to do |
| --- | --- |
| Everything is happening at once. | That is the stage. Ask which single system they would fix first rather than debugging all of them. |
| The summary shows zeros. | `save current run results` has to run before the summary reads them, inside the same session-end block. |
| The wrong role came back. | The role comes from their own pit and collision data, not from the lens they picked in Design. That mismatch is worth discussing. |
| We ran out of time. | Cut the remix, never the last four steps. A race without the reflection is just a game. |

#### Check for understanding

A student can name one decision they made and the role that decision belongs to.

#### If you have more time, and if you have less

- **Stretch:** ask what evidence from the run should appear in the summary, then have them rewrite it.
- **Support:** do the final race as a class, then let students work through the reflection steps at their own pace.

### 8. Closing (3 minutes, 5 at 90)

- ask for one sentence per team: what they changed, and what it did
- take one role connection from the room and name it as a real job
- close on the next-test focus each team wrote, which is the handoff a real team would leave behind

## Educator Moves That Help Throughout

- point to one variable, block, score lens, or system at a time
- ask learners to predict before they test when possible
- treat unexpected results as useful data
- keep discussions grounded in what the game actually showed
- keep prompts short enough that students can return quickly to action
- invite more than one reasonable answer when students compare strategies
- use career language after the gameplay moment, not far before it
- keep audience participation frequent enough that students alternate between doing, noticing, and explaining
- name the STEM idea after students experience it so the concept attaches to a concrete moment

## Best Places to Pause

- after the system check in Join the Team, where a setting is proved rather than assumed
- after the prediction in Design, before anyone runs the bench
- after the comparison in Test, where two runs sit side by side
- at the first **Session over** report, which every session produces
- the moment the rain arrives in Decide and the speed readout falls
- after the role and career connection in Race and Reflect
- during remix if two teams reached clearly different outcomes

## Recovery Moves for Live Events

### If devices are uneven

- pair students quickly and assign Driver and Navigator roles
- demo one step live while others catch up
- keep the room on the skillmap path instead of opening the full project early

### If a workspace is broken

- send the student back to **step one of the stage they are in** and use **Replace my code**, which resets the workspace to that stage's starting code
- expect it to clear their team name, car name, and unit choices along with the broken blocks, since those live in the code it replaces
- reach for it when the workspace is the problem; when the student simply does not know the next move, open the step's hint instead

### If the room is moving too slowly

- prioritize one complete journey through all six stages
- reduce the number of pause points instead of rushing every prompt
- protect the first test, one compare-and-explain moment, and the closing reflection

### If the room is moving too quickly

- add a replay or one focused remix
- ask for evidence-based comparisons between teams
- use stronger extension prompts from the [Agenda]({{ site.baseurl }}/educators/agenda/) or [Remix & Extensions]({{ site.baseurl }}/educators/supplementals/)

### If energy drops

- ask a short prediction question and send students back to action
- use one visible team example instead of a broad explanation
- rotate roles to reactivate participation

## Resetting Between Groups

At an event, one device is often used by several groups in a row. A new group should start from a clean car, not inherit the last group's tuned setup.

Earlier versions of this activity asked students to build a reset button into their own code. That step has been removed. It was maintenance work rather than learning, and it put a system-clearing control within reach of the person least likely to want it. Clearing between groups is now a facilitator action.

### Between groups on a shared device

- [ ] Use the skillmap's own controls to restart the activity or clear progress for that node before handing the device over.
- [ ] If the skillmap still shows the previous group's completed nodes, the browser session is still theirs. Open the skillmap in a new private or incognito window for the next group.
- [ ] Confirm the next group starts at **Join the Team** with nothing marked complete.

### How to tell a stale session apart from a fresh one

A fresh start shows the default team name and a stock car. If the first group's team name, car design, or tuned speed appears in the new group's project, the session did not clear. Open a new private window and start again.

### If groups will overlap

- [ ] Have each group sign in, or give each group its own device or browser profile. Signed-in progress follows the account rather than the machine, which removes the problem entirely.
- [ ] Where sign-in is not possible, plan one private window per group rather than resetting in place.
