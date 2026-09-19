namespace SpriteKind {
    export const TestTrackObstacle = SpriteKind.create()
    export const TestTrackDecoration = SpriteKind.create()
}

namespace drivenByStemSupport {
    const GARAGE_TEST_BED_WIDTH = 160
    const GARAGE_TEST_BED_HEIGHT = 120
    const GARAGE_TEST_BED_FLOOR_Y = 90
    const GARAGE_TEST_BED_ROLLER_Y = 88
    const GARAGE_TEST_BED_ROLLER_X = 32
    const GARAGE_TEST_BED_ROLLER_WIDTH = 96
    const GARAGE_TEST_BED_GAUGE_X = 8
    const GARAGE_TEST_BED_GAUGE_WIDTH = 144
    const GARAGE_TEST_BED_GAUGE_HEIGHT = 6
    const GARAGE_TEST_BED_GAUGE_SPEED_Y = 18
    const GARAGE_TEST_BED_GAUGE_EFFICIENCY_Y = 38
    const GARAGE_TEST_BED_GAUGE_DRAIN_Y = 58
    const GARAGE_TEST_BED_LABEL_X = 8
    const GARAGE_TEST_BED_VALUE_X = 112
    const GARAGE_TEST_BED_HINT_X = 12
    const GARAGE_TEST_BED_HINT_Y = 104
    const GARAGE_TEST_BED_SPEED_MAX = 140
    const GARAGE_TEST_BED_CAR_Y = 98
    const GARAGE_TEST_BED_CAR_MIN_X = GARAGE_TEST_BED_ROLLER_X + 12
    const GARAGE_TEST_BED_CAR_MAX_X = GARAGE_TEST_BED_ROLLER_X + GARAGE_TEST_BED_ROLLER_WIDTH - 12
    const GARAGE_TEST_BED_HEADER_COLOR = 9
    const GARAGE_TEST_BED_PANEL_COLOR = 13
    const GARAGE_TEST_BED_FLOOR_COLOR = 6
    const GARAGE_TEST_BED_TEXT_COLOR = 15
    const GARAGE_TEST_BED_ROLLER_COLOR = 15
    const GARAGE_TEST_BED_ROLLER_STRIPE_COLOR = 1

    const TEST_TRACK_LENGTH_MULTIPLIER = 1
    const TEST_TRACK_DURATION_SECONDS = 60
    const TEST_TRACK_COURSE_DISTANCE = 2000 * TEST_TRACK_LENGTH_MULTIPLIER
    const TEST_TRACK_HORIZON = 80
    const TEST_TRACK_WORLD_Y = -10000
    const TEST_TRACK_END_POS = TEST_TRACK_HORIZON - 4
    const TEST_TRACK_SCALE = -256 * (TEST_TRACK_WORLD_Y / (TEST_TRACK_HORIZON - 5))
    const TEST_TRACK_CAR_SCREEN_X = 80
    const TEST_TRACK_CAR_SCREEN_Y = 110
    const TEST_TRACK_ROAD_BASE_WIDTH = 210
    const TEST_TRACK_CURVE_STRENGTH = 7
    const TEST_TRACK_MAX_OBSTACLES = 5
    const TEST_TRACK_SCORE_DIVISOR = 120
    // The car's top speed is whatever driveSpeed says, read in the team's own
    // dashboard units: 90 means 90 mph, or 90 km/h. Track speeds are held in
    // world units per second, which is km/h x this factor, so the physics stay
    // honest across both units and the dashboard can read back the setting.
    const TEST_TRACK_WORLD_PER_KMH = 1.8
    const TEST_TRACK_MAX_SETTING_MPH = 150
    const TEST_TRACK_MAX_SETTING_KMH = 240
    const TEST_TRACK_OFFROAD_DRAG = 200
    const TEST_TRACK_STEER_DRAG = 20
    const TEST_TRACK_ACCELERATION = 50
    const TEST_TRACK_BRAKE_DECELERATION = 90
    const TEST_TRACK_COAST_DECELERATION = 45
    const TEST_TRACK_CANVAS_WIDTH = 160
    const TEST_TRACK_CANVAS_HEIGHT = 120
    const TEST_TRACK_HUD_STRIP_HEIGHT = 20
    const TEST_TRACK_HUD_TEXT_Y = 6
    const TEST_TRACK_CURB_LIGHT_COLOR = 1
    const TEST_TRACK_CURB_DARK_COLOR = 15
    // A hit costs a share of the car's own top speed, so it stings the same
    // whether the team set 90 km/h or 150 mph.
    const TEST_TRACK_COLLISION_LOSS_SHARE = 0.3
    const TEST_TRACK_COLLISION_MIN_LOSS = 60
    const TEST_TRACK_SKY_COLOR = 9
    const TEST_TRACK_VERGE_COLOR = 6
    const TEST_TRACK_ROAD_COLOR = 11
    const TEST_TRACK_WET_SKY_COLOR = 11
    const TEST_TRACK_WET_VERGE_COLOR = 8
    const TEST_TRACK_WET_ROAD_COLOR = 12
    const TEST_TRACK_RAIN_STREAKS = 14
    const TEST_TRACK_RAIN_STREAK_HEIGHT = 4
    // Race sessions roll off the line already moving, and never drop below a
    // quarter of top speed, so the road always reads as a road.
    const TEST_TRACK_SESSION_START_SHARE = 0.5
    const TEST_TRACK_SESSION_FLOOR_SHARE = 0.25
    const TEST_TRACK_SESSION_SPRITE_SPREAD = 34
    const TEST_TRACK_ANNOUNCEMENT_MILLISECONDS = 2600
    const TEST_TRACK_ANNOUNCEMENT_Y = 30
    const TEST_TRACK_FALSE_START_PENALTY_MILLISECONDS = 5000
    const TEST_TRACK_GAS_MULTIPLIER = 10
    const TEST_TRACK_MIN_GAS = 30
    const TEST_TRACK_MAX_GAS = 100
    // Gas goes by distance covered, not by time on track, and the cost of a
    // stretch of road grows with the square of speed. That is the same rule as
    // Riley's bench in Design, so a slower setup always saves gas and a faster
    // one always spends it, whichever units the team drives in.
    const TEST_TRACK_GAS_REFERENCE_SPEED = 288
    const TEST_TRACK_GAS_PER_1000_UNITS = 7
    const TEST_TRACK_OFFROAD_GAS_DRAIN = 1.2
    const TEST_TRACK_GAS_BAR_WIDTH = 20
    const TEST_TRACK_GAS_BAR_HEIGHT = 4
    const TEST_TRACK_GAS_BAR_OFFSET = -26
    const TEST_TRACK_GAS_BAR_PADDING = 8
    const TEST_TRACK_MPH_FACTOR = 0.621371
    const TEST_TRACK_SUMMARY_ROUNDING = 10
    const TEST_TRACK_RUN_DURATION_MILLISECONDS = TEST_TRACK_DURATION_SECONDS * 1000
    const TEST_TRACK_HUD_RIGHT_PADDING = 8
    const TEST_TRACK_FUEL_LABEL_X = 8
    const TEST_TRACK_FUEL_LABEL_Y = 6
    const TEST_TRACK_START_LIGHT_COUNT = 5
    const TEST_TRACK_STAGE_WAIT_MILLISECONDS = 2000
    const TEST_TRACK_LIGHT_STEP_MILLISECONDS = 450
    const TEST_TRACK_LIGHT_HOLD_MILLISECONDS = 700
    const TEST_TRACK_GO_FLASH_MILLISECONDS = 650
    const TEST_TRACK_LIGHT_BEEP_FREQUENCY = 784
    const TEST_TRACK_LIGHT_BEEP_DURATION = 90
    const TEST_TRACK_GO_TONE_FREQUENCY = 988
    const TEST_TRACK_GO_TONE_DURATION = 280
    const TEST_TRACK_ENGINE_REV_LOW_FREQUENCY = 196
    const TEST_TRACK_ENGINE_REV_MID_FREQUENCY = 262
    const TEST_TRACK_ENGINE_REV_HIGH_FREQUENCY = 330
    const TEST_TRACK_ENGINE_REV_PEAK_FREQUENCY = 392
    const TEST_TRACK_ENGINE_REV_STEP_DURATION = 120
    const TEST_TRACK_ENGINE_REV_PEAK_DURATION = 180
    const TEST_TRACK_QUICK_REACTION_MILLISECONDS = 400
    const TEST_TRACK_STEADY_REACTION_MILLISECONDS = 800
    const TEST_TRACK_CUSTOM_SPRITE_SWAP_INDEX = 10
    const TEST_TRACK_NEAR_CONE_SWAP_INDEX = 6
    const TEST_TRACK_SKYLINE_BASE_Y = 28
    const TEST_TRACK_SKYLINE_SCROLL_DIVISOR = 48

    const skylineLayerOneWidths = [14, 10, 18, 12, 16, 11, 20, 13, 15, 12]
    const skylineLayerOneHeights = [10, 16, 8, 19, 12, 15, 9, 18, 11, 14]
    const skylineLayerTwoWidths = [11, 16, 9, 14, 12, 18, 10, 15, 13, 17]
    const skylineLayerTwoHeights = [6, 10, 7, 12, 8, 11, 6, 9, 7, 10]

    const scaleByDepth: number[] = []
    const worldZByDepth: number[] = []
    const roadOffsetByDepth: number[] = []
    const tinyConeImage = img`
        4
    `
    const smallConeImage = img`
        . 4 .
        1 4 1
        . 1 .
    `
    const mediumConeImage = img`
        . . 4 . .
        . 4 4 4 .
        1 4 4 4 1
        . 1 1 1 .
        . . 1 . .
    `
    const mediumTrackObstacleImage = img`
        . . . 4 . . .
        . . 4 4 4 . .
        . 4 4 4 4 4 .
        1 4 4 4 4 4 1
        . 1 1 1 1 1 .
        . . 1 1 1 . .
        . . . 1 . . .
    `
    const fallbackConeImage = img`
        . . . . . . . . . . . . . . . .
        . . . . . . 4 4 . . . . . . . .
        . . . . . 4 4 4 4 . . . . . . .
        . . . . . 1 4 4 1 . . . . . . .
        . . . . 1 4 4 4 4 1 . . . . . .
        . . . . 1 4 4 4 4 1 . . . . . .
        . . . . . 1 4 4 1 . . . . . . .
        . . . . . 1 4 4 1 . . . . . . .
        . . . . 1 4 4 4 4 1 . . . . . .
        . . . . 1 4 4 4 4 1 . . . . . .
        . . . 1 4 4 4 4 4 4 1 . . . . .
        . . . 1 4 4 4 4 4 4 1 . . . . .
        . . 1 1 1 1 1 1 1 1 1 1 . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . . 1 1 1 1 . . . . . . .
    `

    let hooksInstalled = false
    let trackStarted = false
    let activeTrack: TestTrackState
    let garagePreviewActive = false
    let garagePreviewBaseSpeed = 0
    let garagePreviewEfficiency = 0
    let garagePreviewDrain = 0
    let garagePreviewOriginalImage: Image = null

    // The bench runs a 20-lap test on its own, so students see what their speed,
    // efficiency and cost actually do rather than an echo of the numbers they
    // typed. Each lap burns cost x (speed / 50)^2 energy from a tank of
    // efficiency x 10; when the tank can't cover the next lap the car pits.
    // Race time = laps x (1000 / speed) + 20 s per pit stop. Lower wins.
    const BENCH_RACE_LAPS = 20
    const BENCH_PIT_SECONDS = 20
    const BENCH_LAP_DISTANCE = 1000
    const BENCH_ENERGY_SPEED_SCALE = 50
    const BENCH_TANK_PER_EFFICIENCY = 10
    const BENCH_SPINUP_MS = 600
    const BENCH_MS_PER_RACE_SECOND = 18
    const BENCH_PIT_PAUSE_MS = 400
    let benchNextEventAt = 0
    let benchLaps = 0
    let benchPits = 0
    let benchEnergy = 0
    let benchTank = 0
    let benchEnergyPerLap = 0
    let benchLapSeconds = 0
    let benchRaceSeconds = 0
    let benchStatus = ""
    let benchFinished = false
    let vehicleTrackOriginalImage: Image = null
    let sessionReport = ""
    let sessionLaunchHandler: () => void = null

    export function startGarageTestBed(): void {
        previewGarageTestBed(drivenByStem.savedDriveSpeed(), drivenByStem.savedEfficiency(), drivenByStem.savedEfficiencyCost())
    }

    export function previewGarageTestBed(speed: number, efficiency: number, drain: number): void {
        ensureHooksInstalled()
        resetTrack()

        const playerCar = ensurePlayerCar()
        garagePreviewActive = true
        garagePreviewBaseSpeed = speed
        garagePreviewEfficiency = efficiency
        garagePreviewDrain = drain
        garagePreviewOriginalImage = playerCar.image.clone()

        controller.moveSprite(playerCar, 0, 0)
        playerCar.setImage(rotateImageClockwise(garagePreviewOriginalImage))
        playerCar.setFlag(SpriteFlag.StayInScreen, true)
        playerCar.setFlag(SpriteFlag.Invisible, false)
        playerCar.setPosition(TEST_TRACK_CAR_SCREEN_X, GARAGE_TEST_BED_CAR_Y)

        drivenByStem.startStage(drivenByStem.RaceStage.GarageSetup)
        info.stopCountdown()
        info.showCountdown(false)
        info.showScore(false)
        startBenchRun(speed, efficiency, drain)
        renderGarageTestBed(playerCar, speed, benchEnergy, benchTank, drain, benchStatus)
    }

    function startBenchRun(speed: number, efficiency: number, drain: number): void {
        const benchSpeed = Math.max(1, speed)
        const speedFactor = benchSpeed / BENCH_ENERGY_SPEED_SCALE
        benchTank = Math.max(1, efficiency) * BENCH_TANK_PER_EFFICIENCY
        benchLapSeconds = BENCH_LAP_DISTANCE / benchSpeed
        benchEnergyPerLap = Math.max(0, drain) * speedFactor * speedFactor
        benchEnergy = benchTank
        benchLaps = 0
        benchPits = 0
        benchRaceSeconds = 0
        benchFinished = false
        benchStatus = speed > 100 ? "High speed setup" : "Balanced setup"
        benchNextEventAt = game.runtime() + BENCH_SPINUP_MS
    }

    function advanceBenchRun(): void {
        if (benchFinished) {
            return
        }
        if (benchEnergyPerLap > benchTank) {
            finishBenchRun(false)
            return
        }
        const now = game.runtime()
        while (!benchFinished && now >= benchNextEventAt) {
            if (benchEnergy < benchEnergyPerLap) {
                benchEnergy = benchTank
                benchPits += 1
                benchRaceSeconds += BENCH_PIT_SECONDS
                benchStatus = "PIT STOP " + benchPits
                benchNextEventAt += BENCH_PIT_PAUSE_MS
            } else {
                benchEnergy -= benchEnergyPerLap
                benchLaps += 1
                benchRaceSeconds += benchLapSeconds
                benchStatus = "Lap " + benchLaps + "/" + BENCH_RACE_LAPS + "  Pits " + benchPits
                benchNextEventAt += Math.max(1, benchLapSeconds * BENCH_MS_PER_RACE_SECOND)
                if (benchLaps >= BENCH_RACE_LAPS) {
                    finishBenchRun(true)
                }
            }
        }
    }

    // Each role lens reads the same bench result and notices something different,
    // in the voice of the mentor who holds that role. Every reading fits on the
    // report's first page (at most 11 of 12 lines) at any realistic speed.
    function benchLensReading(lapsPerTank: number): string {
        const lens = drivenByStem.roleLens()
        const speed = Math.max(1, garagePreviewBaseSpeed)
        let reading: string
        if (lens == "strategist") {
            reading = benchPits == 0
                ? "No pit stops: all " + BENCH_RACE_LAPS + " laps on one tank."
                : countOf(benchPits, "pit stop") + " cost " + (benchPits * BENCH_PIT_SECONDS) + " s. Fewer stops can beat faster laps."
        } else if (lens == "software engineer") {
            reading = "Speed " + Math.round(speed) + " ran with cost " + garagePreviewDrain + ". Is that what your rule says?"
        } else if (lens == "data analyst") {
            reading = "Tank lasts " + countOf(lapsPerTank, "lap") + ", so " + BENCH_RACE_LAPS + " laps needs " + countOf(benchPits, "refill") + "."
        } else {
            const saving = roundToTenth(benchLapSeconds - BENCH_LAP_DISTANCE / (speed + 10))
            reading = "10 more speed would save " + saving + " s a lap. Worth the energy?"
        }
        return lens.charAt(0).toUpperCase() + lens.substr(1) + ":\n" + reading
    }

    function countOf(n: number, word: string): string {
        return n + " " + word + (n == 1 ? "" : "s")
    }

    function finishBenchRun(completed: boolean): void {
        benchFinished = true
        const raceSeconds = Math.round(benchRaceSeconds)
        const lapsPerTank = benchEnergyPerLap > 0 ? Math.floor(benchTank / benchEnergyPerLap) : BENCH_RACE_LAPS
        benchStatus = completed ? "Race time " + raceSeconds + " s" : "Can't finish a lap"
        const report = completed
            ? "Bench test: " + BENCH_RACE_LAPS + " laps"
                + "\nLap time: " + roundToTenth(benchLapSeconds) + " s"
                + "\nEnergy per lap: " + roundToTenth(benchEnergyPerLap)
                + "\nLaps per tank: " + lapsPerTank
                + "\nPit stops: " + benchPits
                + "\nRace time: " + raceSeconds + " s"
                + "\nLower race time wins."
                + "\n" + benchLensReading(lapsPerTank)
            : "Bench test"
                + "\nEnergy per lap: " + roundToTenth(benchEnergyPerLap)
                + "\nTank: " + benchTank
                + "\nThis setup can't finish one lap on a full tank."
                + "\nLower the speed or the cost."
        control.runInParallel(function () {
            // Only report if the bench is still the active screen. When a later
            // stage's test track or race session takes over, this never shows.
            if (garagePreviewActive) {
                drivenByStem.showResultsDialog(report)
            }
        })
    }

    class TestTrackObstacleData {
        // Cones come from this file and are drawn from hand-made images. Anything
        // a student puts on the track keeps its own art, scaled to its distance.
        scaledSize: number
        scaledImage: Image
        hitApplied: boolean
        constructor(public laneOffset: number, public worldZ: number, public variant: number, public sourceImage: Image) {
            this.scaledSize = 0
            this.scaledImage = null
            this.hitApplied = false
        }
    }

    class TestTrackState {
        car: Sprite
        carWorldX: number
        maxDriveSpeed: number
        speed: number
        topSpeed: number
        distanceOffset: number
        nextObstacleDistance: number
        segmentDx: number
        previousSegmentDx: number
        segmentPos: number
        elapsedMilliseconds: number
        stagedAtLine: boolean
        starterDelayMilliseconds: number
        starterElapsedMilliseconds: number
        starterLightsAnnounced: number
        reactionTimeMilliseconds: number
        falseStartLocked: boolean
        goFlashMilliseconds: number
        gasBar: StatusBarSprite
        gasRemaining: number
        gasMax: number
        gasDrainBase: number
        collisionCount: number
        displayUnit: string
        raceStarted: boolean
        active: boolean
        obstacles: Sprite[]
        // A race session shares the road, the physics and the art with the test
        // track. What it drops is the timed course: no finish line, no gas, no
        // starter lights, and the traffic comes from the student's own code.
        sessionMode: boolean
        stageKey: string
        speedFloor: number
        floorArmed: boolean
        announcement: string
        announcementMilliseconds: number

        constructor(car: Sprite, maxDriveSpeed: number, gasBar: StatusBarSprite, gasMax: number, gasDrainBase: number, displayUnit: string) {
            this.car = car
            this.carWorldX = 0
            this.maxDriveSpeed = maxDriveSpeed
            this.speed = 0
            this.topSpeed = 0
            this.distanceOffset = 0
            this.nextObstacleDistance = 0
            this.segmentDx = 0
            this.previousSegmentDx = 0
            this.segmentPos = 0
            this.elapsedMilliseconds = 0
            this.stagedAtLine = false
            this.starterDelayMilliseconds = 0
            this.starterElapsedMilliseconds = 0
            this.starterLightsAnnounced = 0
            this.reactionTimeMilliseconds = -1
            this.falseStartLocked = false
            this.goFlashMilliseconds = 0
            this.gasBar = gasBar
            this.gasRemaining = gasMax
            this.gasMax = gasMax
            this.gasDrainBase = gasDrainBase
            this.collisionCount = 0
            this.displayUnit = displayUnit
            this.raceStarted = false
            this.active = true
            this.obstacles = []
            this.sessionMode = false
            this.stageKey = ""
            this.speedFloor = 0
            this.floorArmed = false
            this.announcement = ""
            this.announcementMilliseconds = 0
        }
    }

    export function startVehicleTestTrack(): void {
        ensureTrackTables()
        ensureHooksInstalled()
        resetTrack()

        const playerCar = ensurePlayerCar()
        const displayUnit = drivenByStem.speedDisplayUnit()
        const maxDriveSpeed = worldSpeedFromSetting(drivenByStem.savedDriveSpeed(), displayUnit)
        const gasMax = clampToRange(drivenByStem.savedEfficiency() * TEST_TRACK_GAS_MULTIPLIER, TEST_TRACK_MIN_GAS, TEST_TRACK_MAX_GAS)
        const gasDrainBase = Math.max(1, drivenByStem.savedEfficiencyCost())
        const gasBar = createGasBar(gasMax)

        prepareCarForTrack(playerCar)
        scene.setBackgroundImage(image.create(TEST_TRACK_CANVAS_WIDTH, TEST_TRACK_CANVAS_HEIGHT))
        drivenByStem.startStage(drivenByStem.RaceStage.GarageShakedown)
        info.stopCountdown()
        info.showCountdown(false)
        info.showScore(false)

        activeTrack = new TestTrackState(playerCar, maxDriveSpeed, gasBar, gasMax, gasDrainBase, displayUnit)
        activeTrack.stageKey = drivenByStem.currentStageName()
        hideCarUntilStage()
        trackStarted = true
    }

    /**
     * Put a race session on the same moving track the shakedown uses. The stage,
     * the score, the hearts and the clock belong to the session; this owns the
     * road, the car and anything the student puts on the track.
     */
    export function startTrackSession(): void {
        ensureTrackTables()
        ensureHooksInstalled()
        resetTrack()

        const playerCar = ensurePlayerCar()
        const displayUnit = drivenByStem.speedDisplayUnit()
        const maxDriveSpeed = worldSpeedFromSetting(drivenByStem.savedDriveSpeed(), displayUnit)

        prepareCarForTrack(playerCar)
        playerCar.setFlag(SpriteFlag.Invisible, false)
        scene.setBackgroundImage(image.create(TEST_TRACK_CANVAS_WIDTH, TEST_TRACK_CANVAS_HEIGHT))

        activeTrack = new TestTrackState(playerCar, maxDriveSpeed, null, 0, 1, displayUnit)
        activeTrack.stageKey = drivenByStem.currentStageName()
        activeTrack.sessionMode = true
        activeTrack.speedFloor = maxDriveSpeed * TEST_TRACK_SESSION_FLOOR_SHARE
        hideCarUntilStage()
        trackStarted = true
    }

    /**
     * Stop a race session's road. Called when the session ends, before the
     * student's own session-end code runs, so the last frame holds still.
     */
    export function endTrackSession(): void {
        if (!trackStarted || !activeTrack.sessionMode) {
            return
        }

        sessionReport = buildSessionReport()
        activeTrack.active = false
        trackStarted = false
        clearObstacles()
        restoreVehicleTrackCarImage()
    }

    /**
     * Show the session's own result. Every session ends with this, whether or not
     * the student has built their `on [stage] session ends` block yet.
     */
    export function showSessionReport(): void {
        if (!sessionReport) {
            return
        }

        const report = sessionReport
        sessionReport = ""
        drivenByStem.showResultsDialog(report)
    }

    /**
     * Run code the moment the lights go out, so the session clock measures racing
     * and not the time a student spends staging the car.
     */
    export function onTrackSessionLaunch(handler: () => void): void {
        sessionLaunchHandler = handler
    }

    function buildSessionReport(): string {
        return "Session over"
            + "\n- Time: " + formatElapsedTime(activeTrack.elapsedMilliseconds)
            + "\n- Score: " + info.score()
            + "\n- Energy: " + info.life()
            + "\n- Top speed: " + formatSpeed(activeTrack.topSpeed, activeTrack.displayUnit)
    }

    /**
     * Put a sprite the student created on the road ahead of the car. Returns
     * false when no track is running, so the caller can clear it away.
     */
    export function placeOnTrack(sprite: Sprite): boolean {
        if (!sprite || !trackIsActive()) {
            return false
        }

        sprite.setFlag(SpriteFlag.StayInScreen, false)
        sprite.setVelocity(0, 0)
        sprite.data = new TestTrackObstacleData(
            randint(0 - TEST_TRACK_SESSION_SPRITE_SPREAD, TEST_TRACK_SESSION_SPRITE_SPREAD),
            activeTrack.distanceOffset + worldZByDepth[TEST_TRACK_END_POS - 1],
            0,
            sprite.image.clone())
        activeTrack.obstacles.push(sprite)
        // Put it at the horizon straight away, so it never shows for a frame at
        // the middle of the screen where sprites are born.
        positionObstacle(sprite, sprite.data as TestTrackObstacleData, TEST_TRACK_END_POS - 1)
        return true
    }

    /**
     * Show a short banner across the road, for news that arrives mid-race.
     * False when no track is running, so the caller can fall back to a dialog.
     */
    export function announceOnTrack(message: string): boolean {
        if (!trackIsActive()) {
            return false
        }

        activeTrack.announcement = message
        activeTrack.announcementMilliseconds = TEST_TRACK_ANNOUNCEMENT_MILLISECONDS
        return true
    }

    /**
     * Set the live speed limit on a running track from a dashboard-unit number,
     * so a grip rule can slow the car in the rain. False when no track is up.
     */
    export function setTrackSpeedLimit(setting: number): boolean {
        if (!trackIsActive()) {
            return false
        }

        activeTrack.maxDriveSpeed = worldSpeedFromSetting(setting, activeTrack.displayUnit)
        activeTrack.speedFloor = activeTrack.sessionMode
            ? activeTrack.maxDriveSpeed * TEST_TRACK_SESSION_FLOOR_SHARE
            : 0
        return true
    }

    function prepareCarForTrack(playerCar: Sprite): void {
        vehicleTrackOriginalImage = playerCar.image.clone()
        playerCar.setImage(rotateImageHalfTurn(vehicleTrackOriginalImage))
        controller.moveSprite(playerCar, 0, 0)
        playerCar.setFlag(SpriteFlag.StayInScreen, true)
        playerCar.setPosition(TEST_TRACK_CAR_SCREEN_X, TEST_TRACK_CAR_SCREEN_Y)
    }

    // driveSpeed is read in the team's dashboard units and held in world units
    // per second, so the dashboard reads back exactly what the student set.
    function worldSpeedFromSetting(setting: number, unit: string): number {
        const capped = clampToRange(setting, 0, unit == "mph" ? TEST_TRACK_MAX_SETTING_MPH : TEST_TRACK_MAX_SETTING_KMH)
        const kilometersPerHour = unit == "mph" ? capped / TEST_TRACK_MPH_FACTOR : capped
        return kilometersPerHour * TEST_TRACK_WORLD_PER_KMH
    }

    function ensureTrackTables(): void {
        if (scaleByDepth.length > 0) {
            return
        }

        for (let i = 0; i < TEST_TRACK_HORIZON; i++) {
            const worldZ = TEST_TRACK_WORLD_Y / (i - TEST_TRACK_HORIZON)
            scaleByDepth.push((TEST_TRACK_SCALE / worldZ) | 0)
            worldZByDepth.push(worldZ | 0)
            roadOffsetByDepth.push(0)
        }
    }

    function ensurePlayerCar(): Sprite {
        let playerCar = sprites.allOfKind(SpriteKind.Player)[0]
        if (playerCar) {
            return playerCar
        }

        playerCar = sprites.create(defaultPlayerCarImage(), SpriteKind.Player)
        return playerCar
    }

    function renderGarageTestBed(playerCar: Sprite, speed: number, energy: number, energyMax: number, drain: number, status: string): void {
        const canvas = image.create(GARAGE_TEST_BED_WIDTH, GARAGE_TEST_BED_HEIGHT)
        const safeSpeed = clampToRange(speed, 0, GARAGE_TEST_BED_SPEED_MAX)
        const safeMax = Math.max(1, energyMax)
        const safeEnergy = clampToRange(energy, 0, safeMax)
        const safeDrain = clampToRange(drain, 0, 5)
        const speedWidth = integerDivide(safeSpeed * GARAGE_TEST_BED_GAUGE_WIDTH, GARAGE_TEST_BED_SPEED_MAX)
        const energyWidth = Math.floor(safeEnergy * GARAGE_TEST_BED_GAUGE_WIDTH / safeMax)
        const drainWidth = integerDivide(safeDrain * GARAGE_TEST_BED_GAUGE_WIDTH, 5)

        canvas.fill(GARAGE_TEST_BED_PANEL_COLOR)
        canvas.fillRect(0, 0, GARAGE_TEST_BED_WIDTH, 26, GARAGE_TEST_BED_HEADER_COLOR)
        canvas.fillRect(0, GARAGE_TEST_BED_FLOOR_Y, GARAGE_TEST_BED_WIDTH, GARAGE_TEST_BED_HEIGHT - GARAGE_TEST_BED_FLOOR_Y, GARAGE_TEST_BED_FLOOR_COLOR)

        canvas.fillRect(GARAGE_TEST_BED_ROLLER_X, GARAGE_TEST_BED_ROLLER_Y, GARAGE_TEST_BED_ROLLER_WIDTH, 8, GARAGE_TEST_BED_ROLLER_COLOR)
        for (let x = GARAGE_TEST_BED_ROLLER_X + 4; x < GARAGE_TEST_BED_ROLLER_X + GARAGE_TEST_BED_ROLLER_WIDTH; x += 12) {
            canvas.fillRect(x, GARAGE_TEST_BED_ROLLER_Y + 1, 4, 6, GARAGE_TEST_BED_ROLLER_STRIPE_COLOR)
        }

        drawGarageGauge(canvas, "Speed", GARAGE_TEST_BED_GAUGE_SPEED_Y, speedWidth, 8, Math.round(speed) + "")
        drawGarageGauge(canvas, "Energy", GARAGE_TEST_BED_GAUGE_EFFICIENCY_Y, energyWidth, 7, Math.round(safeEnergy) + "/" + safeMax)
        drawGarageGauge(canvas, "Cost", GARAGE_TEST_BED_GAUGE_DRAIN_Y, drainWidth, 2, safeDrain + "/5")

        canvas.printCenter("Garage Test Bed", 4, GARAGE_TEST_BED_TEXT_COLOR, image.font8)
        canvas.print(status, GARAGE_TEST_BED_LABEL_X, 78, GARAGE_TEST_BED_TEXT_COLOR, image.font8)
        
        scene.setBackgroundImage(canvas)
        playerCar.y = GARAGE_TEST_BED_CAR_Y
        playerCar.x = clampToRange(playerCar.x, GARAGE_TEST_BED_CAR_MIN_X, GARAGE_TEST_BED_CAR_MAX_X)
    }

    function drawGarageGauge(canvas: Image, label: string, y: number, width: number, fillColor: number, valueText: string): void {
        canvas.print(label, GARAGE_TEST_BED_LABEL_X, y - 2, GARAGE_TEST_BED_TEXT_COLOR, image.font8)
        canvas.drawRect(GARAGE_TEST_BED_GAUGE_X, y + 9, GARAGE_TEST_BED_GAUGE_WIDTH, GARAGE_TEST_BED_GAUGE_HEIGHT, GARAGE_TEST_BED_TEXT_COLOR)
        canvas.fillRect(GARAGE_TEST_BED_GAUGE_X + 1, y + 10, Math.max(0, width - 2), GARAGE_TEST_BED_GAUGE_HEIGHT - 2, fillColor)
        canvas.print(valueText, GARAGE_TEST_BED_VALUE_X, y - 2, GARAGE_TEST_BED_TEXT_COLOR, image.font8)
    }

    function updateGaragePreview(): void {
        if (!garagePreviewActive) {
            return
        }

        const playerCar = sprites.allOfKind(SpriteKind.Player)[0]
        if (!playerCar) {
            return
        }

        playerCar.x = clampToRange(playerCar.x, GARAGE_TEST_BED_CAR_MIN_X, GARAGE_TEST_BED_CAR_MAX_X)
        playerCar.y = GARAGE_TEST_BED_CAR_Y

        advanceBenchRun()
        renderGarageTestBed(playerCar, garagePreviewBaseSpeed, benchEnergy, benchTank, garagePreviewDrain, benchStatus)
    }

    function ensureHooksInstalled(): void {
        if (hooksInstalled) {
            return
        }

        hooksInstalled = true

        sprites.onOverlap(SpriteKind.Player, SpriteKind.TestTrackObstacle, function (sprite, otherSprite) {
            if (!(trackIsActive()) || sprite != activeTrack.car) {
                return
            }

            removeObstacle(otherSprite)
            otherSprite.destroy(effects.disintegrate, 200)
            activeTrack.collisionCount += 1
            applyCollisionSpeedLoss()
            scene.cameraShake()
        })

        game.onPaint(function () {
            if (!(trackIsActive())) {
                return
            }

            drawTrackFrame()
        })

        game.onUpdate(function () {
            updateGaragePreview()
        })

        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            if (!(trackIsActive()) || trackHasLaunched() || activeTrack.stagedAtLine) {
                return
            }

            pullCarToStartLine()
        })
    }

    // Hitting something a student put on the road costs the car speed, once per
    // sprite. Their own overlap block still counts the hit and clears the sprite;
    // this is the part the track owns, and it can't be raced by their code.
    function chargeForSessionHit(obstacle: Sprite, data: TestTrackObstacleData): void {
        if (data.hitApplied || obstacle.kind() != SpriteKind.Enemy || !activeTrack.car.overlapsWith(obstacle)) {
            return
        }

        data.hitApplied = true
        applyCollisionSpeedLoss()
        scene.cameraShake()
    }

    function applyCollisionSpeedLoss(): void {
        const loss = Math.max(TEST_TRACK_COLLISION_MIN_LOSS, activeTrack.maxDriveSpeed * TEST_TRACK_COLLISION_LOSS_SHARE)
        activeTrack.speed = clampToRange(activeTrack.speed - loss, 0, activeTrack.maxDriveSpeed)
    }

    function trackIsActive(): boolean {
        return trackStarted && activeTrack.active && drivenByStem.currentStageName() == activeTrack.stageKey
    }

    function drawTrackFrame(): void {
        const deltaTime = game.eventContext().deltaTime
        let curveAccumulator = 0
        let offRoad = false
        const canvas = scene.backgroundImage()
        if (!canvas) {
            return
        }

        const session = activeTrack.sessionMode
        const wet = drivenByStem.weatherIs(drivenByStem.WeatherMode.Rain)
        const skyColor = wet ? TEST_TRACK_WET_SKY_COLOR : TEST_TRACK_SKY_COLOR
        const vergeColor = wet ? TEST_TRACK_WET_VERGE_COLOR : TEST_TRACK_VERGE_COLOR
        const roadColor = wet ? TEST_TRACK_WET_ROAD_COLOR : TEST_TRACK_ROAD_COLOR

        updateStarterSequence(deltaTime)
        const launched = trackHasLaunched()
        const steeringDelta = launched ? controller.dx(30000) : 0
        const accelerating = launched && controller.up.isPressed() && !controller.down.isPressed()
        const braking = launched && controller.down.isPressed() && !controller.up.isPressed()

        if (!launched && !launchInputPressed()) {
            activeTrack.falseStartLocked = false
        }

        if (activeTrack.stagedAtLine && !launched && launchInputPressed() && !activeTrack.falseStartLocked) {
            triggerFalseStart()
            return
        }

        if (launched) {
            if (!session) {
                captureReactionIfNeeded(steeringDelta, accelerating, braking)
            }

            activeTrack.elapsedMilliseconds += deltaTime * 1000
            activeTrack.carWorldX += 0 - steeringDelta
            activeTrack.distanceOffset += deltaTime * activeTrack.speed

            if (!session && activeTrack.distanceOffset >= activeTrack.nextObstacleDistance && activeTrack.obstacles.length < TEST_TRACK_MAX_OBSTACLES) {
                spawnObstacle()
            }
        }

        canvas.fillRect(0, 0, TEST_TRACK_CANVAS_WIDTH, TEST_TRACK_CANVAS_HEIGHT, skyColor)
        canvas.fillRect(0, TEST_TRACK_CAR_SCREEN_Y - TEST_TRACK_HORIZON - 2, TEST_TRACK_CANVAS_WIDTH, TEST_TRACK_HORIZON + 20, vergeColor)

        let roadX = activeTrack.carWorldX | 0
        const segmentPosition = activeTrack.segmentPos | 0
        for (let i = 0; i < TEST_TRACK_END_POS; i++) {
            const dx = i < segmentPosition ? activeTrack.previousSegmentDx : activeTrack.segmentDx
            curveAccumulator += dx
            roadX += curveAccumulator
            roadOffsetByDepth[i] = roadX
        }

        const endOffset = 0 - roadOffsetByDepth[TEST_TRACK_END_POS - 1]
        let obstacleIndex = 0
        for (let i = 0; i < TEST_TRACK_END_POS; i++) {
            roadOffsetByDepth[i] += integerDivide(endOffset * i, TEST_TRACK_END_POS)
            while (obstacleIndex < activeTrack.obstacles.length) {
                const obstacle = activeTrack.obstacles[obstacleIndex]
                const data = obstacle.data as TestTrackObstacleData

                if (data.worldZ > activeTrack.distanceOffset + worldZByDepth[i]) {
                    break
                }

                if (i == 0) {
                    obstacle.destroy()
                    activeTrack.obstacles.splice(obstacleIndex, 1)
                } else {
                    positionObstacle(obstacle, data, i)
                    if (session) {
                        chargeForSessionHit(obstacle, data)
                    }
                    obstacleIndex++
                }
            }
        }

        for (let i = 0; i < TEST_TRACK_END_POS; i++) {
            const y = 120 - i
            const roadWidth = scaleByDepth[i] * TEST_TRACK_ROAD_BASE_WIDTH >> 8
            const roadLeft = ((160 - roadWidth) >> 1) + (roadOffsetByDepth[i] >> 8)
            const sideWidth = 10 * scaleByDepth[i] >> 8

            canvas.fillRect(0, y, 160, 1, vergeColor)
            canvas.fillRect(roadLeft, y, roadWidth, 1, roadColor)

            if (sideWidth > 0) {
                const sideColor = (worldZByDepth[i] + activeTrack.distanceOffset) & 32 ? TEST_TRACK_CURB_LIGHT_COLOR : TEST_TRACK_CURB_DARK_COLOR
                canvas.fillRect(roadLeft, y, sideWidth, 1, sideColor)
                canvas.fillRect(roadLeft + roadWidth - sideWidth, y, sideWidth, 1, sideColor)
            }

            if (i == 5) {
                if (launched) {
                    offRoad = updateCarPosition(roadLeft, roadWidth, steeringDelta, accelerating, braking)
                } else if (activeTrack.stagedAtLine) {
                    holdCarAtStart()
                } else {
                    hideCarUntilStage()
                }
            }
        }

        if (launched) {
            activeTrack.topSpeed = Math.max(activeTrack.topSpeed, activeTrack.speed)

            if (!session) {
                updateGas(deltaTime, offRoad)

                if (activeTrack.gasRemaining <= 0) {
                    finishTestTrack(false)
                    return
                }
            }
        }

        if (wet) {
            drawRain(canvas)
        }

        if (activeTrack.announcementMilliseconds > 0) {
            activeTrack.announcementMilliseconds -= deltaTime * 1000
            drawAnnouncement(canvas)
        }

        if (session) {
            // The session's own dashboard owns the top strip: hearts, clock and
            // score. The speed readout tucks into the bottom corner.
            drawSessionSpeed(canvas)
            drawStarterOverlay(canvas)
        } else {
            drawHudStrip(canvas)
            drawFuelHudLabel(canvas)
            canvas.printCenter(formatElapsedTime(launched ? activeTrack.elapsedMilliseconds : 0), TEST_TRACK_HUD_TEXT_Y, 1, image.font8)
            drawRightAlignedHudText(canvas, formatSpeed(activeTrack.speed, activeTrack.displayUnit), TEST_TRACK_HUD_TEXT_Y)
            drawStarterOverlay(canvas)

            if (launched && activeTrack.distanceOffset >= TEST_TRACK_COURSE_DISTANCE) {
                finishTestTrack(true)
                return
            }

            if (launched && activeTrack.elapsedMilliseconds >= TEST_TRACK_RUN_DURATION_MILLISECONDS) {
                finishTestTrack(false)
                return
            }
        }

        if (launched) {
            activeTrack.segmentPos += -0.003 * activeTrack.speed
            if (activeTrack.segmentPos < 0) {
                activeTrack.previousSegmentDx = activeTrack.segmentDx
                activeTrack.segmentPos = TEST_TRACK_HORIZON
                activeTrack.segmentDx = nextCurve()
            }
        }
    }

    function updateStarterSequence(deltaTime: number): void {
        if (trackHasLaunched()) {
            activeTrack.goFlashMilliseconds = Math.max(0, activeTrack.goFlashMilliseconds - deltaTime * 1000)
            return
        }

        if (!activeTrack.stagedAtLine) {
            return
        }

        if (activeTrack.starterDelayMilliseconds > 0) {
            activeTrack.starterDelayMilliseconds = Math.max(0, activeTrack.starterDelayMilliseconds - deltaTime * 1000)
            if (activeTrack.starterDelayMilliseconds > 0) {
                return
            }
        }

        activeTrack.starterElapsedMilliseconds += deltaTime * 1000
        const lightsOn = Math.min(TEST_TRACK_START_LIGHT_COUNT, integerDivide(activeTrack.starterElapsedMilliseconds, TEST_TRACK_LIGHT_STEP_MILLISECONDS))
        if (lightsOn > activeTrack.starterLightsAnnounced) {
            activeTrack.starterLightsAnnounced = lightsOn
            playStarterBeep()
        }

        if (activeTrack.starterElapsedMilliseconds >= starterDurationMilliseconds()) {
            launchTrackRun()
        }
    }

    function starterDurationMilliseconds(): number {
        return TEST_TRACK_START_LIGHT_COUNT * TEST_TRACK_LIGHT_STEP_MILLISECONDS + TEST_TRACK_LIGHT_HOLD_MILLISECONDS
    }

    function launchTrackRun(): void {
        activeTrack.raceStarted = true
        activeTrack.speed = 0
        activeTrack.topSpeed = 0
        activeTrack.floorArmed = false
        activeTrack.goFlashMilliseconds = TEST_TRACK_GO_FLASH_MILLISECONDS
        playGoTone()

        if (activeTrack.sessionMode && sessionLaunchHandler) {
            sessionLaunchHandler()
        }
    }

    function pullCarToStartLine(): void {
        activeTrack.falseStartLocked = false
        activeTrack.car.setFlag(SpriteFlag.Invisible, false)
        holdCarAtStart()
        restartStarterSequence()
    }

    function restartStarterSequence(): void {
        activeTrack.stagedAtLine = true
        activeTrack.raceStarted = false
        activeTrack.speed = 0
        activeTrack.topSpeed = 0
        activeTrack.goFlashMilliseconds = 0
        activeTrack.starterDelayMilliseconds = TEST_TRACK_STAGE_WAIT_MILLISECONDS
        activeTrack.starterElapsedMilliseconds = 0
        activeTrack.starterLightsAnnounced = 0
        activeTrack.car.setFlag(SpriteFlag.Invisible, false)
        holdCarAtStart()
        playEngineRev()
    }

    function playStarterBeep(): void {
        control.runInParallel(function () {
            music.playTone(TEST_TRACK_LIGHT_BEEP_FREQUENCY, TEST_TRACK_LIGHT_BEEP_DURATION)
        })
    }

    function playGoTone(): void {
        control.runInParallel(function () {
            music.playTone(TEST_TRACK_GO_TONE_FREQUENCY, TEST_TRACK_GO_TONE_DURATION)
        })
    }

    function playEngineRev(): void {
        control.runInParallel(function () {
            music.playTone(TEST_TRACK_ENGINE_REV_LOW_FREQUENCY, TEST_TRACK_ENGINE_REV_STEP_DURATION)
            music.playTone(TEST_TRACK_ENGINE_REV_MID_FREQUENCY, TEST_TRACK_ENGINE_REV_STEP_DURATION)
            music.playTone(TEST_TRACK_ENGINE_REV_HIGH_FREQUENCY, TEST_TRACK_ENGINE_REV_STEP_DURATION)
            music.playTone(TEST_TRACK_ENGINE_REV_PEAK_FREQUENCY, TEST_TRACK_ENGINE_REV_PEAK_DURATION)
        })
    }

    function captureReactionIfNeeded(steeringDelta: number, accelerating: boolean, braking: boolean): void {
        if (activeTrack.reactionTimeMilliseconds >= 0) {
            return
        }

        if (steeringDelta != 0 || accelerating || braking) {
            activeTrack.reactionTimeMilliseconds = activeTrack.elapsedMilliseconds
        }
    }

    function drawStarterOverlay(canvas: Image): void {
        if (!(trackIsActive())) {
            return
        }

        if (!activeTrack.stagedAtLine) {
            drawStagePrompt(canvas)
            return
        }

        if (!trackHasLaunched() && activeTrack.starterDelayMilliseconds > 0) {
            return
        }

        if (trackHasLaunched() && activeTrack.goFlashMilliseconds <= 0) {
            return
        }

        const gantryX = 34
        const gantryY = 28
        const lightY = gantryY + 5
        const launched = trackHasLaunched()
        const lightsOn = launched
            ? TEST_TRACK_START_LIGHT_COUNT
            : Math.min(TEST_TRACK_START_LIGHT_COUNT, integerDivide(activeTrack.starterElapsedMilliseconds, TEST_TRACK_LIGHT_STEP_MILLISECONDS))

        canvas.fillRect(gantryX, gantryY, 92, 20, 15)
        canvas.fillRect(gantryX + 2, gantryY + 2, 88, 16, 12)

        for (let i = 0; i < TEST_TRACK_START_LIGHT_COUNT; i++) {
            const lightX = gantryX + 8 + i * 16
            const lightColor = i < lightsOn ? (launched ? 7 : 2) : 1

            canvas.fillRect(lightX - 1, lightY - 1, 10, 10, 15)
            canvas.fillRect(lightX, lightY, 8, 8, lightColor)
        }

        if (launched) {
            canvas.print("GO!", gantryX + 34, gantryY + 12, 7)
        } else {
            canvas.print("Ready", gantryX + 28, gantryY + 12, 1)
        }
    }

    function drawStagePrompt(canvas: Image): void {
        const promptX = 40
        const promptY = 27
        const promptInnerWidth = 76
        const font = image.font8
        const pressAX = promptX + 2 + ((promptInnerWidth - "Press A".length * font.charWidth) >> 1)
        const toStageX = promptX + 2 + ((promptInnerWidth - "to Stage".length * font.charWidth) >> 1)
        canvas.fillRect(promptX, promptY, 80, 20, 15)
        canvas.fillRect(promptX + 2, promptY + 2, 76, 16, 12)
        canvas.print("Press A", pressAX, promptY + 2, 1, font)
        canvas.print("to Stage", toStageX, promptY + 10, 1, font)
    }

    function holdCarAtStart(): void {
        activeTrack.car.x = TEST_TRACK_CAR_SCREEN_X
        activeTrack.car.y = TEST_TRACK_CAR_SCREEN_Y
    }

    function hideCarUntilStage(): void {
        activeTrack.car.setFlag(SpriteFlag.Invisible, true)
    }

    function launchInputPressed(): boolean {
        return controller.up.isPressed()
            || controller.down.isPressed()
            || controller.left.isPressed()
            || controller.right.isPressed()
    }

    function triggerFalseStart(): void {
        if (!(trackIsActive()) || trackHasLaunched() || activeTrack.falseStartLocked) {
            return
        }

        activeTrack.falseStartLocked = true
        activeTrack.elapsedMilliseconds += TEST_TRACK_FALSE_START_PENALTY_MILLISECONDS
        scene.cameraShake(2, 200)
        // A race session is timed by its own countdown, so a false start there
        // costs the staging time rather than seconds on a run sheet.
        game.splash("False start", activeTrack.sessionMode ? "Stage again." : "+5.0 s penalty")
        restartStarterSequence()
    }

    function drawRain(canvas: Image): void {
        for (let i = 0; i < TEST_TRACK_RAIN_STREAKS; i++) {
            canvas.fillRect(randint(0, TEST_TRACK_CANVAS_WIDTH - 1), randint(TEST_TRACK_SKYLINE_BASE_Y, TEST_TRACK_CANVAS_HEIGHT - 1), 1, TEST_TRACK_RAIN_STREAK_HEIGHT, 1)
        }
    }

    function drawAnnouncement(canvas: Image): void {
        const text = activeTrack.announcement
        const width = text.length * image.font8.charWidth + 8
        const left = (TEST_TRACK_CANVAS_WIDTH - width) >> 1
        canvas.fillRect(left, TEST_TRACK_ANNOUNCEMENT_Y, width, 12, 15)
        canvas.drawRect(left, TEST_TRACK_ANNOUNCEMENT_Y, width, 12, 5)
        canvas.print(text, left + 4, TEST_TRACK_ANNOUNCEMENT_Y + 2, 5, image.font8)
    }

    function drawSessionSpeed(canvas: Image): void {
        const text = formatSpeed(activeTrack.speed, activeTrack.displayUnit)
        const width = text.length * image.font8.charWidth + 4
        canvas.fillRect(0, TEST_TRACK_CANVAS_HEIGHT - 10, width, 10, 15)
        canvas.print(text, 2, TEST_TRACK_CANVAS_HEIGHT - 9, 1, image.font8)
    }

    function drawHudStrip(canvas: Image): void {
        canvas.fillRect(0, 0, TEST_TRACK_CANVAS_WIDTH, TEST_TRACK_HUD_STRIP_HEIGHT, 12)
        canvas.fillRect(0, TEST_TRACK_HUD_STRIP_HEIGHT - 1, TEST_TRACK_CANVAS_WIDTH, 1, 15)
    }

    function drawFuelHudLabel(canvas: Image): void {
        canvas.print("FUEL", TEST_TRACK_FUEL_LABEL_X, TEST_TRACK_FUEL_LABEL_Y, 1, image.font8)
    }

    function drawRightAlignedHudText(canvas: Image, text: string, y: number): void {
        const font = image.font8
        const x = TEST_TRACK_CANVAS_WIDTH - TEST_TRACK_HUD_RIGHT_PADDING - text.length * font.charWidth
        canvas.print(text, x, y, 1, font)
    }

    function drawCityScape(canvas: Image): void {
        const skylineBaseY = TEST_TRACK_SKYLINE_BASE_Y
        const farOffset = skylineOffset(TEST_TRACK_SKYLINE_SCROLL_DIVISOR)
        const nearOffset = skylineOffset(TEST_TRACK_SKYLINE_SCROLL_DIVISOR >> 1)

        canvas.fillRect(0, skylineBaseY - 2, TEST_TRACK_CANVAS_WIDTH, 2, 1)
        drawSkylineLayer(canvas, skylineLayerTwoWidths, skylineLayerTwoHeights, skylineBaseY, farOffset, 8)
        drawSkylineLayer(canvas, skylineLayerOneWidths, skylineLayerOneHeights, skylineBaseY, nearOffset, 1)
    }

    function drawSkylineLayer(canvas: Image, widths: number[], heights: number[], baseY: number, offset: number, color: number): void {
        let x = 0 - offset
        let index = 0

        while (x < TEST_TRACK_CANVAS_WIDTH) {
            const width = widths[index]
            const height = heights[index]
            const roofX = x + (width >> 1) - 1

            canvas.fillRect(x, baseY - height, width, height, color)
            if (height >= 10) {
                canvas.fillRect(roofX, baseY - height - 3, 2, 3, color)
            }

            x += width + 3
            index = (index + 1) % widths.length
        }
    }

    function skylineOffset(divisor: number): number {
        if (!activeTrack || divisor <= 0) {
            return 0
        }

        let offset = integerDivide(Math.abs(activeTrack.carWorldX), divisor)
        while (offset >= TEST_TRACK_CANVAS_WIDTH) {
            offset -= TEST_TRACK_CANVAS_WIDTH
        }
        return offset
    }

    function spawnObstacle(): void {
        const obstacle = sprites.create(smallConeImage, SpriteKind.TestTrackObstacle)
        obstacle.data = new TestTrackObstacleData(randint(-30, 30), worldZByDepth[TEST_TRACK_END_POS - 1] + activeTrack.distanceOffset, randint(0, 2), null)
        activeTrack.obstacles.push(obstacle)
        activeTrack.nextObstacleDistance = activeTrack.distanceOffset + randint(300, 420)
    }

    function positionObstacle(obstacle: Sprite, data: TestTrackObstacleData, index: number): void {
        const size = Math.max(1, scaleByDepth[index] * 20 >> 8)
        obstacle.y = 120 - index
        obstacle.x = (roadOffsetByDepth[index] >> 8) + 80 + (scaleByDepth[index] * data.laneOffset >> 8)
        obstacle.setImage(data.sourceImage ? sizedSpriteImage(data, size) : pickObstacleImage(size, data.variant, index))
    }

    // A student's own art, redrawn at the size its distance calls for. The last
    // size is kept so this only redraws when the sprite actually grows.
    function sizedSpriteImage(data: TestTrackObstacleData, size: number): Image {
        const target = clampToRange(size, 2, data.sourceImage.width)
        if (data.scaledImage && data.scaledSize == target) {
            return data.scaledImage
        }

        const source = data.sourceImage
        const height = Math.max(1, integerDivide(target * source.height, source.width))
        const scaled = image.create(target, height)
        for (let y = 0; y < height; y++) {
            const sourceY = integerDivide(y * source.height, height)
            for (let x = 0; x < target; x++) {
                scaled.setPixel(x, y, source.getPixel(integerDivide(x * source.width, target), sourceY))
            }
        }

        data.scaledSize = target
        data.scaledImage = scaled
        return scaled
    }

    function createGasBar(gasMax: number): StatusBarSprite {
        const gasBar = statusbars.create(TEST_TRACK_GAS_BAR_WIDTH, TEST_TRACK_GAS_BAR_HEIGHT, StatusBarKind.Energy)
        gasBar.max = gasMax
        gasBar.value = gasMax
        gasBar.setBarBorder(1, 1)
        gasBar.positionDirection(CollisionDirection.Top)
        gasBar.setOffsetPadding(TEST_TRACK_GAS_BAR_OFFSET, TEST_TRACK_GAS_BAR_PADDING)
        return gasBar
    }

    function pickObstacleImage(size: number, variant: number, index: number): Image {
        if (size <= tinyConeImage.width) {
            return tinyConeImage
        }

        if (index > TEST_TRACK_CUSTOM_SPRITE_SWAP_INDEX || size <= smallConeImage.width) {
            return smallConeImage
        }

        if (index > TEST_TRACK_NEAR_CONE_SWAP_INDEX || size <= mediumConeImage.width) {
            return mediumConeImage
        }

        const obstacleOptions = [garageConeImage(), rainPuddleImage(), trackObstacleImage()]
        return obstacleOptions[clampToRange(variant, 0, obstacleOptions.length - 1)]
    }

    function garageConeImage(): Image {
        const cone = assets.image`garageCone`
        return cone ? cone : fallbackConeImage
    }

    function rainPuddleImage(): Image {
        const puddle = assets.image`rainPuddle`
        return puddle ? puddle : trackObstacleImage()
    }

    function trackObstacleImage(): Image {
        const obstacle = assets.image`trackObstacle`
        return obstacle ? obstacle : garageConeImage()
    }

    function finishBannerImage(): Image {
        const banner = assets.image`finishBanner`
        return banner ? banner : fallbackFinishBannerImage()
    }

    function finishTestTrack(completedCourse: boolean): void {
        if (!(trackIsActive())) {
            return
        }

        const performanceResult = Math.max(0, integerDivide(activeTrack.distanceOffset, TEST_TRACK_SCORE_DIVISOR))
        if (completedCourse && activeTrack.collisionCount <= 1) {
            drivenByStem.awardStrategyPoints(1)
        }

        info.stopCountdown()
        info.showCountdown(false)
        info.showScore(false)
        drivenByStem.saveSupportRunResults(
            performanceResult,
            roundToTenth(activeTrack.gasRemaining),
            roundToTenth(activeTrack.elapsedMilliseconds / 1000),
            reactionSeconds(),
            roundToTenth(convertSpeedValue(activeTrack.topSpeed, activeTrack.displayUnit)),
            activeTrack.displayUnit,
            activeTrack.collisionCount
        )

        const summary = buildEfficiencyReport(completedCourse)
        clearObstacles()
        if (activeTrack.gasBar) {
            activeTrack.gasBar.destroy()
        }
        activeTrack.active = false
        trackStarted = false

        showFinishBanner(summary)
        if (drivenByStem.hasSavedTestComparison()) {
            drivenByStem.showSavedTestComparison()
        }
    }

    function buildEfficiencyReport(completedCourse: boolean): string {
        const elapsedSeconds = roundToTenth(activeTrack.elapsedMilliseconds / 1000)
        const gasBurned = Math.max(0, roundToTenth(activeTrack.gasMax - activeTrack.gasRemaining))
        const averageSpeed = elapsedSeconds > 0 ? activeTrack.distanceOffset / elapsedSeconds : 0
        const reportTitle = completedCourse ? "Your Efficiency Report" : "Run report"
        const courseLine = completedCourse ? "Course completed!" : "Course not finished"

        return reportTitle
            + "\n" + courseLine
            + "\n- Time: " + elapsedSeconds + " s"
            + "\n- Reaction: " + reactionSummary(activeTrack.reactionTimeMilliseconds)
            + "\n- Top speed: " + formatSpeed(activeTrack.topSpeed, activeTrack.displayUnit)
            // Top speed should read back as the number the student set, so the
            // limit sits right under it and says where it came from.
            + speedLimitLine()
            + "\n- Avg speed: " + formatSpeed(averageSpeed, activeTrack.displayUnit)
            + "\n- Gas burned: " + drivenByStem.formatFuelAmount(gasBurned)
            + "\n- Crashes: " + activeTrack.collisionCount
    }

    function speedLimitLine(): string {
        const cap = activeTrack.displayUnit == "mph" ? TEST_TRACK_MAX_SETTING_MPH : TEST_TRACK_MAX_SETTING_KMH
        const source = drivenByStem.savedDriveSpeed() > cap ? "track max" : "driveSpeed"
        return "\n- Limit: " + formatSpeed(activeTrack.maxDriveSpeed, activeTrack.displayUnit) + " (" + source + ")"
    }

    function showFinishBanner(summary: string): void {
        const banner = sprites.create(finishBannerImage(), SpriteKind.TestTrackDecoration)
        banner.setFlag(SpriteFlag.RelativeToCamera, true)
        banner.setPosition(80, 20)
        banner.z = scene.HUD_Z - 2
        drivenByStem.showResultsDialog(summary)
        banner.destroy()
    }

    function formatElapsedTime(elapsedMilliseconds: number): string {
        return roundToTenth(elapsedMilliseconds / 1000) + " s"
    }

    function formatSpeed(baseSpeed: number, unit: string): string {
        return roundToTenth(convertSpeedValue(baseSpeed, unit)) + " " + unit
    }

    function convertSpeedValue(worldSpeed: number, unit: string): number {
        const kilometersPerHour = worldSpeed / TEST_TRACK_WORLD_PER_KMH
        if (unit == "mph") {
            return kilometersPerHour * TEST_TRACK_MPH_FACTOR
        }

        return kilometersPerHour
    }

    function roundToTenth(value: number): number {
        return Math.round(value * TEST_TRACK_SUMMARY_ROUNDING) / TEST_TRACK_SUMMARY_ROUNDING
    }

    function reactionSeconds(): number {
        if (activeTrack.reactionTimeMilliseconds < 0) {
            return -1
        }

        return roundToTenth(activeTrack.reactionTimeMilliseconds / 1000)
    }

    function formatReactionTime(reactionMilliseconds: number): string {
        if (reactionMilliseconds < 0) {
            return "no input"
        }

        return roundToTenth(reactionMilliseconds / 1000) + " s"
    }

    function reactionSummary(reactionMilliseconds: number): string {
        if (reactionMilliseconds < 0) {
            return "No launch input"
        }

        return reactionLabel(reactionMilliseconds) + " (" + formatReactionTime(reactionMilliseconds) + ")"
    }

    function reactionLabel(reactionMilliseconds: number): string {
        if (reactionMilliseconds <= TEST_TRACK_QUICK_REACTION_MILLISECONDS) {
            return "Quick start"
        }

        if (reactionMilliseconds <= TEST_TRACK_STEADY_REACTION_MILLISECONDS) {
            return "Steady start"
        }

        return "Late start"
    }

    function fallbackFinishBannerImage(): Image {
        return img`
            . . . . . . . . . . . . . . . .
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
            . 1 f f f f f f f f f f f f 1 .
            . 1 f 5 5 5 5 5 5 5 5 5 5 f 1 .
            . 1 f 5 1 1 1 1 1 1 1 1 5 f 1 .
            . 1 f 5 1 f f f f f f 1 5 f 1 .
            . 1 f 5 1 f 5 5 5 5 f 1 5 f 1 .
            . 1 f 5 1 f 5 1 1 5 f 1 5 f 1 .
            . 1 f 5 1 f 5 5 5 5 f 1 5 f 1 .
            . 1 f 5 1 f f f f f f 1 5 f 1 .
            . 1 f 5 1 1 1 1 1 1 1 1 5 f 1 .
            . 1 f 5 5 5 5 5 5 5 5 5 5 f 1 .
            . 1 f f f f f f f f f f f f 1 .
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `
    }

    function updateCarPosition(roadLeft: number, roadWidth: number, steeringDelta: number, accelerating: boolean, braking: boolean): boolean {
        let offRoad = false
        if (TEST_TRACK_CAR_SCREEN_X < roadLeft || TEST_TRACK_CAR_SCREEN_X > roadLeft + roadWidth) {
            offRoad = true
            activeTrack.car.x = TEST_TRACK_CAR_SCREEN_X + randint(-1, 1)
            activeTrack.car.y = TEST_TRACK_CAR_SCREEN_Y + randint(-1, 1)
        } else {
            activeTrack.car.x = TEST_TRACK_CAR_SCREEN_X
            activeTrack.car.y = TEST_TRACK_CAR_SCREEN_Y
        }

        let speedChange = 0
        if (accelerating) {
            speedChange += TEST_TRACK_ACCELERATION * game.eventContext().deltaTime
        } else if (braking) {
            speedChange -= TEST_TRACK_BRAKE_DECELERATION * game.eventContext().deltaTime
        } else {
            speedChange -= TEST_TRACK_COAST_DECELERATION * game.eventContext().deltaTime
        }

        if (steeringDelta != 0) {
            speedChange -= TEST_TRACK_STEER_DRAG * game.eventContext().deltaTime
        }

        if (offRoad) {
            speedChange -= TEST_TRACK_OFFROAD_DRAG * game.eventContext().deltaTime
        }

        const outOfGas = !activeTrack.sessionMode && activeTrack.gasRemaining <= 0
        const maximumTrackSpeed = outOfGas ? 0 : activeTrack.maxDriveSpeed
        // The floor keeps a session's road moving, but only after the student has
        // got the car up to speed once. A standing start stays a standing start.
        if (!activeTrack.floorArmed && activeTrack.speed >= activeTrack.speedFloor) {
            activeTrack.floorArmed = true
        }
        const holdSpeed = activeTrack.floorArmed && !outOfGas && !offRoad
        const minimumTrackSpeed = holdSpeed ? Math.min(activeTrack.speedFloor, maximumTrackSpeed) : 0
        activeTrack.speed = clampToRange(activeTrack.speed + speedChange, minimumTrackSpeed, maximumTrackSpeed)
        return offRoad
    }

    // Gas goes by the road covered, not the clock: a stretch of track costs
    // cost x (speed / reference)^2, the same shape as the bench in Design.
    function updateGas(deltaTime: number, offRoad: boolean): void {
        const speedRatio = activeTrack.speed / TEST_TRACK_GAS_REFERENCE_SPEED
        const perThousandUnits = activeTrack.gasDrainBase * TEST_TRACK_GAS_PER_1000_UNITS * speedRatio * speedRatio
        const gasDrain = perThousandUnits * activeTrack.speed / 1000 + (offRoad ? TEST_TRACK_OFFROAD_GAS_DRAIN : 0)
        activeTrack.gasRemaining = Math.max(0, activeTrack.gasRemaining - gasDrain * deltaTime)
        activeTrack.gasBar.value = activeTrack.gasRemaining | 0

        if (activeTrack.gasRemaining <= 0) {
            activeTrack.speed = Math.max(0, activeTrack.speed - TEST_TRACK_OFFROAD_DRAG * deltaTime)
        }
    }

    function nextCurve(): number {
        return (randint(0, 2) - 1) * TEST_TRACK_CURVE_STRENGTH
    }

    function removeObstacle(target: Sprite): void {
        if (!activeTrack) {
            return
        }

        const obstacleIndex = activeTrack.obstacles.indexOf(target)
        if (obstacleIndex >= 0) {
            activeTrack.obstacles.splice(obstacleIndex, 1)
        }
    }

    function clearObstacles(): void {
        if (!activeTrack) {
            return
        }

        for (let obstacle of activeTrack.obstacles) {
            obstacle.destroy()
        }
        activeTrack.obstacles = []
    }

    function resetTrack(): void {
        restoreGaragePreviewCarImage()
        restoreVehicleTrackCarImage()
        garagePreviewActive = false
        if (trackStarted) {
            activeTrack.active = false
            activeTrack.car.setFlag(SpriteFlag.Invisible, false)
            clearObstacles()
            if (activeTrack.gasBar) {
                activeTrack.gasBar.destroy()
            }
        }
        trackStarted = false
        info.stopCountdown()
        info.showCountdown(false)
        info.showScore(false)

        for (let obstacle of sprites.allOfKind(SpriteKind.TestTrackObstacle)) {
            obstacle.destroy()
        }
        for (let decoration of sprites.allOfKind(SpriteKind.TestTrackDecoration)) {
            decoration.destroy()
        }
    }

    function restoreGaragePreviewCarImage(): void {
        if (!(garagePreviewOriginalImage)) {
            return
        }

        const playerCar = sprites.allOfKind(SpriteKind.Player)[0]
        if (playerCar) {
            playerCar.setImage(garagePreviewOriginalImage)
        }

        garagePreviewOriginalImage = null
    }

    function restoreVehicleTrackCarImage(): void {
        if (!(vehicleTrackOriginalImage)) {
            return
        }

        const playerCar = sprites.allOfKind(SpriteKind.Player)[0]
        if (playerCar) {
            playerCar.setImage(vehicleTrackOriginalImage)
        }

        vehicleTrackOriginalImage = null
    }

    function trackHasLaunched(): boolean {
        return !!activeTrack && activeTrack.raceStarted
    }

    function clampToRange(value: number, minValue: number, maxValue: number): number {
        return Math.max(minValue, Math.min(maxValue, value))
    }

    function integerDivide(dividend: number, divisor: number): number {
        return (dividend / divisor) | 0
    }

    function rotateImageClockwise(source: Image): Image {
        const rotated = image.create(source.height, source.width)
        for (let x = 0; x < source.width; x++) {
            for (let y = 0; y < source.height; y++) {
                rotated.setPixel(source.height - 1 - y, x, source.getPixel(x, y))
            }
        }
        return rotated
    }

    function rotateImageHalfTurn(source: Image): Image {
        const rotated = image.create(source.width, source.height)
        for (let x = 0; x < source.width; x++) {
            for (let y = 0; y < source.height; y++) {
                rotated.setPixel(source.width - 1 - x, source.height - 1 - y, source.getPixel(x, y))
            }
        }
        return rotated
    }

    function defaultPlayerCarImage(): Image {
        const playerCar = assets.image`playerCar`
        if (playerCar) {
            return playerCar
        }

        return img`
            . . . . . . . . . . . . . . . .
            . . . . . . 1 1 1 1 . . . . . .
            . . . . . 1 1 9 9 1 1 . . . . .
            . . . . 1 1 1 9 9 1 1 1 . . . .
            . . . 1 1 1 1 9 9 1 1 1 1 . . .
            . . . 1 1 1 1 9 9 1 1 1 1 . . .
            . . . 1 1 1 1 9 9 1 1 1 1 . . .
            . . . . 1 1 1 9 9 1 1 1 . . . .
            . . . . 1 1 1 9 9 1 1 1 . . . .
            . . . . 1 1 1 9 9 1 1 1 . . . .
            . . . . 1 1 1 9 9 1 1 1 . . . .
            . . . 1 1 1 1 9 9 1 1 1 1 . . .
            . . 1 1 1 1 1 9 9 1 1 1 1 1 . .
            . . 1 1 1 1 1 9 9 1 1 1 1 1 . .
            . . . . 5 5 5 . . 5 5 5 . . . .
            . . . . 5 . 5 . . 5 . 5 . . . .
        `
    }
}
