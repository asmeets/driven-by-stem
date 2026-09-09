# driven-by-stem-preview
* name: Driven by STEM, enabled by Microsoft, Revision Preview
* description: Six stages, one continuous build. Code carries forward, so the car a student sets up in Join the Team is the car they race in Race and Reflect. Join the Team and Design are ready to play end to end. The remaining four stages open onto their approved designs, so the whole journey can be reviewed in one pass.
* primarycolor: #ffd84d
* secondarycolor: #000
* tertiarycolor: #EAF3F8
* highlightcolor: #42cdf4
* completednodecolor: #067d14
* allowcodecarryover: true
* backgroundurl: https://raw.githubusercontent.com/asmeets/driven-by-stem/main/assets/skillmap/background.gif
* bannerurl: https://raw.githubusercontent.com/asmeets/driven-by-stem/main/assets/skillmap/banner.png

## driven-by-stem-preview
* name: Driven by STEM, Six Stages
* description: Students join a race team as junior engineers and build a working race simulator. They choose their own dashboard units, predict what more speed will cost, run a controlled comparison, read their own race data, and make strategy calls when the weather turns.
* layout: manual

### join-the-team
* name: Join the Team
* type: tutorial
* allowcodecarryover: false
* description: Take delivery of the car, name your team, and decide how your dashboard reads. Then check the car against what you specified.
* imageUrl: https://raw.githubusercontent.com/asmeets/driven-by-stem/main/assets/skillmap/node-mission-briefing.png
* position: 0 6
* tags: stage-1, ready, operations, ux, controls
* next: design
* url: github:asmeets/driven-by-stem/tutorials/stages/1-join-the-team-v1

### design
* name: Design
* type: tutorial
* allowcodecarryover: true
* description: Predict what more speed will cost, tune it, write the tradeoff rule, and put your prediction on the test bench.
* imageUrl: https://raw.githubusercontent.com/asmeets/driven-by-stem/main/assets/skillmap/node-setup-tradeoffs.png
* position: 2 5
* tags: stage-2, ready, performance-engineering, variables, tradeoffs
* next: test
* url: github:asmeets/driven-by-stem/tutorials/stages/2-design-v1

### test
* name: Test
* type: tutorial
* allowcodecarryover: true
* description: One track, run twice, one variable changed. Then read the two results side by side.
* imageUrl: https://raw.githubusercontent.com/asmeets/driven-by-stem/main/assets/skillmap/node-garage-shakedown.png
* position: 4 6
* tags: stage-3, design-preview, test-engineering, comparison
* next: analyze
* url: github:asmeets/driven-by-stem/tutorials/stages/3-test-v1

### analyze
* name: Analyze
* type: tutorial
* allowcodecarryover: true
* description: Drive a full session, then read collision count against score and efficiency.
* imageUrl: https://raw.githubusercontent.com/asmeets/driven-by-stem/main/assets/skillmap/node-hit-the-track.png
* position: 6 5
* tags: stage-4, design-preview, telemetry, data
* next: decide
* url: github:asmeets/driven-by-stem/tutorials/stages/4-analyze-v1

### decide
* name: Decide
* type: tutorial
* allowcodecarryover: true
* description: The weather turns, grip drops, and the pit lane opens. Make the call before you know how it ends.
* imageUrl: https://raw.githubusercontent.com/asmeets/driven-by-stem/main/assets/skillmap/node-changing-conditions.png
* position: 8 6
* tags: stage-5, design-preview, strategy, conditionals
* next: race-and-reflect
* url: github:asmeets/driven-by-stem/tutorials/stages/5-decide-v1

### race-and-reflect
* name: Race and Reflect
* type: tutorial
* allowcodecarryover: true
* description: Everything runs at once, then you find your own decisions inside the result.
* imageUrl: https://raw.githubusercontent.com/asmeets/driven-by-stem/main/assets/skillmap/node-final-challenge.png
* position: 10 5
* tags: stage-6, design-preview, systems, careers, reflection
* next: preview-finish
* url: github:asmeets/driven-by-stem/tutorials/stages/6-race-and-reflect-v1

### preview-finish
* name: Stand on the Podium!
* kind: completion
* type: certificate
* url: https://raw.githubusercontent.com/asmeets/driven-by-stem/main/assets/certificates/driven-by-stem.pdf
* imageUrl: https://raw.githubusercontent.com/asmeets/driven-by-stem/main/assets/certificates/driven-by-stem.png
* position: 12 6
* rewards:
    * certificate:
        * url: https://raw.githubusercontent.com/asmeets/driven-by-stem/main/assets/certificates/driven-by-stem.pdf
        * preview: https://raw.githubusercontent.com/asmeets/driven-by-stem/main/assets/certificates/driven-by-stem.png
    * completion-badge:
        * type: completion-badge
        * imageUrl: https://raw.githubusercontent.com/asmeets/driven-by-stem/main/assets/badges/badge-driven-by-stem.png
        * displayName: Driven by STEM
