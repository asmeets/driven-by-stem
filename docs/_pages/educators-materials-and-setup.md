---
layout: educator-page
title: "Remix & Extensions"
permalink: /educators/supplementals/
educator_nav: supplementals
---

This page collects the remix and extension paths that are most useful once the core session is working well. It is most useful when a group finishes early, wants another round of challenge, or leaves with enough momentum that one session does not feel like enough.

The aim is to extend the experience in ways that stay concrete, teachable, and connected to the original learning goals.

## Recommended Path

The core experience is designed to be delivered as a single, guided skillmap session. This path gives the clearest student on-ramp and keeps the experience cumulative across stages. Students move through Join the Team, Design, Test, Analyze, Decide, and Race and Reflect in order, making choices, testing them, and reflecting on what changed at each step. They can choose to login with a Google, Microsoft, or Clever account to save their progress and remix the project after the session, but **no login is required to experience the core learning**.

### Guided Skillmap Session

This format works for most classrooms, workshops, and activations. Learners follow the MakeCode Arcade pathway in order and build one concept at a time. This path gives the clearest student on-ramp and keeps the experience cumulative across stages.

Facilitation supports are built into the skillmap, and the [In the Classroom]({{ site.baseurl }}/educators/in-the-classroom/) notes provide specific pause points, discussion prompts, and remix moments.

## Stage-Based Remix Ideas

The strongest remix moments in this project come directly from the tutorials learners have already completed. Each one points to a small, visible mechanic students can change without losing the full thread of the experience.

Two things are worth knowing before choosing a remix. All six stages drive the same pseudo-3D moving road, and anything that belongs on that road is placed with the `put [sprite] on the track ahead` block, so obstacles, pit markers, and puddles are all remixed the same way. Every race session also ends with a **Session over** report showing time, score, energy, and top speed, which makes it the one readout a team can compare across every stage without building anything first.

Race sessions stage themselves. The car rolls to the line, five lights count down, and a thirty-second countdown starts when they go out, twenty-five seconds in Decide. There is no retry or reset button in student code to remix, and clearing a device between groups is a facilitator action.

### Join the Team

Join the Team asks students to show the mission, build the car, drive it with the arrows, name the team and the car, choose the dashboard units, and prove those units are wired with a system check on the menu button.

**Specific examples from the tutorials**

- rewrite the mission splash so a new player understands the challenge before the car moves
- change the team name and car name so the profile screen reads as that team's rather than the default
- switch the dashboard units between mph and km/h, then run the system check again and watch the readout follow
- add a screen to the menu button so the check reports one more setting the team cares about

**Facilitator prompts**

- Which units does your driver actually think in?
- What does a new player need on screen before the car moves?
- How would you prove a setting is wired rather than typed?
- Which role would care most about how this dashboard reads?

### Design

Design asks students to create `driveSpeed`, connect it to the car, add efficiency and cost variables, write the tradeoff rule that fires above 100, run the garage bench, and choose a role lens.

**Specific examples from the tutorials**

- move the threshold in the tradeoff rule off 100 and find the new speed where the race time turns
- change what the rule costs, such as a larger efficiency drop or a different multiplier on mistakes
- run the bench at 90 and again at 110, write both race times down, then argue for a third value
- switch the role lens and read the same bench report through a different job

**Facilitator prompts**

- Your `driveSpeed` is a top speed in your own units. What does 90 mean on your dashboard?
- Why would the slower car finish twenty laps first?
- Where should the threshold sit if the goal were the fewest pit stops rather than the lowest race time?
- Which of the four lenses would sign off on your setup, and which one would argue?

### Test

Test asks students to launch the test track, run a baseline, change exactly one variable, run again, and read the two runs side by side.

**Specific examples from the tutorials**

- change a single variable other than `driveSpeed`, such as an efficiency value, and predict the comparison before running
- run a third test, then decide which two runs the comparison should hold
- record the run report after each run and check it against what the comparison screen says
- add a line to the menu button readout so the baseline can be reread without driving again

**Facilitator prompts**

- What is your baseline, and where is it written down?
- What did you change, and what did it cost?
- Which number moved the most, and is that the one you expected?
- What would changing a second variable have done to your ability to explain the result?

### Analyze

Analyze asks students to start a timed session, add two collision counters, spawn traffic on a `game.onUpdateInterval`, charge every collision to the car's energy, reward clean driving, and handle the end of the session.

**Specific examples from the tutorials**

- change the spawn interval on the traffic block so the road is busier or emptier
- change what a collision costs in energy, then drive the same session and read the count against the damage
- change the clean-driving window or what a clean stretch earns, so patience is worth more or less
- extend the end-of-session report so it shows something the built-in **Session over** report does not

**Facilitator prompts**

- How many hits do you think you will take, and does your remix change that answer?
- Is this remix rewarding speed, control, or patience the most?
- Which number would you show a teammate to prove the session went well?
- What did the built-in report already tell you, and what did you have to build yourself?

### Decide

Decide asks students to switch to the weather session, count pit stops, put pit markers on the road, decide what a stop is worth to each setup, write the grip rule, and add puddles that follow the rain.

**Specific examples from the tutorials**

- change how often pit markers arrive so the pit window is easier or harder to catch
- change what a stop is worth to each setup so Pace and Balance trade places
- change the grip penalty so rain costs the car more or less of its top speed
- change how often puddles appear, remembering that they follow the rain into the final race as well

**Facilitator prompts**

- Did you pit? What made you decide, and how early did you decide it?
- Your car is slower in the rain. Is that the game punishing you, or your own rule working?
- If the rain arrived later, which call would change?
- This session runs twenty-five seconds instead of thirty. What does the shorter clock do to the decision?

### Race and Reflect

Race and Reflect asks students to run the final race with faster obstacles and pit markers still on the road, score it, save the run, show a summary, choose a next-test focus, and connect their own decisions to a role and a career.

**Specific examples from the tutorials**

- change the final race's balance between obstacle risk and pit stop recovery
- change the scoring rules so a clean race or a well-used pit lane is worth more
- rewrite the summary so the result reads as one sentence rather than three numbers
- revise the next-test focus branches, or the role and career text, so the closing sounds like it is about the student

**Facilitator prompts**

- Which of your systems broke first under pressure?
- What evidence from the run should appear in the summary?
- Does this remix help a player understand the result, or only change the score?
- Which role did your decisions match, and is that the one you expected?

### Three Remix Levels

These levels work at any of the six stages. Choose the stage the team is most curious about, then choose a level.

- **Level 1: Quick Tune**: Change one visible number, such as `driveSpeed`, a spawn interval, or a reward value, then run the stage once and name what moved.
- **Level 2: Rule Builder**: Change a rule rather than a number, such as the tradeoff threshold, the grip penalty, or what a pit stop is worth to each setup, then explain who the new rule favors.
- **Level 3: Systems Challenge**: Change two connected things, such as obstacle frequency plus collision cost or rain timing plus grip, then decide whether the race is still fair and readable and make the end-of-session report say so.

The best remix prompts are the ones that can be explained in a few sentences, pointed to in one small part of the project, and tested quickly in the simulator.

## Follow-Up Ideas

The session can end at the skillmap, but it does not have to. When more time is available, or when learners leave wanting to keep exploring, these follow-up options extend the experience without losing the original learning thread.

### Continue the Remix Loop

- invite teams to revisit one stage and improve a mechanic they now understand better than they did on the first run
- ask students to choose whether they want to remix for speed, clarity, fairness, strategy, or accessibility, then explain why
- have pairs compare two versions of the same game element, such as a fast setup versus a balanced setup or a short pit reward versus a larger one
- encourage students to keep the change small enough that they can still explain what changed and what effect it had

### Extend the Career Conversation

- ask learners which team role they want to learn more about and what part of the game made them choose it
- invite students to connect one stage of the experience to one real job, using the nine on the [Career Lenses]({{ site.baseurl }}/educators/career-lenses/) page rather than a general list
- use the reflection screens from Race and Reflect as a starting point for a short career discussion rather than a separate presentation

### Use the Session as a Launch Point for Further Learning

- ask students what they would build next if they were turning this into a larger game
- invite them to add a new challenge, a new weather condition, a new reward system, or a different ending message
- use one of the remix levels above as a bridge into a second lesson, coding club meeting, or maker-style design session

### Support Educator Reflection

- note which pause points created the strongest student discussion
- record which remix prompt produced the clearest cause-and-effect learning
- identify where students needed the most support with controls, vocabulary, or prediction
- use those notes to shorten or sharpen the next run of the experience

### Share the Project Beyond the Session

- share the repository link with educators who want to inspect the project structure more deeply
- use the repository's README for contributor-facing workflow notes, including how tutorials are versioned and how a release is cut
- point interested learners or collaborators toward the full repository if they want to explore how the tutorials connect to the underlying project systems

### Simple Closing Moves if Time Is Short

Even a few extra minutes after the main experience can support a useful follow-up.

- ask each team to name one thing they changed and one thing they would test next
- ask for one role connection from the room
- have students vote on which remix idea would be most interesting for a second round
