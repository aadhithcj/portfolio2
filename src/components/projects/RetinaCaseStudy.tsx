import { Link } from "@tanstack/react-router";
import { type Project } from "@/lib/portfolio";
import {
  ArrowUpRight,
  Camera,
  Cpu,
  Layers,
  Volume2,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Activity,
  Zap,
  Info,
  ShieldAlert,
  Smartphone,
  Scan,
  Compass,
  Boxes,
} from "lucide-react";

interface RetinaCaseStudyProps {
  project: Project;
  previous: Project;
  next: Project;
}

export function RetinaCaseStudy({
  project,
  previous,
  next,
}: RetinaCaseStudyProps) {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Case Study Hero */}
      <header className="border-b border-line pb-12 sm:pb-16">
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-lime">
          <span>AI / ANDROID / COMPUTER VISION</span>
          <span className="text-muted-foreground/60">•</span>
          <span>FINAL-YEAR CAPSTONE · 2025–2026</span>
        </div>

        <h1 className="mt-4 break-words font-display text-5xl leading-[1.04] sm:text-7xl md:text-8xl">
          RETINA<span className="text-lime">.</span>
        </h1>

        <p className="mt-4 font-display text-2xl text-foreground/90 sm:text-3xl md:text-4xl">
          An AI-powered assistive system for the visually impaired.
        </p>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          A native Android application combining real-time text recognition,
          Indian currency detection, everyday object recognition, and obstacle
          depth awareness with conversational audio and spatial cues.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              data-crosshair-target
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-line bg-surface/80 px-4 py-2 font-mono text-xs font-medium text-foreground transition-all hover:border-lime hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2"
            >
              <span>Source code</span>
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          )}
          <a
            href="#architecture"
            data-crosshair-target
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-line/60 bg-surface/40 px-4 py-2 font-mono text-xs text-muted-foreground transition-all hover:border-lime/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2"
          >
            <span>System Architecture ↓</span>
          </a>
          <a
            href="#performance"
            data-crosshair-target
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-line/60 bg-surface/40 px-4 py-2 font-mono text-xs text-muted-foreground transition-all hover:border-lime/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2"
          >
            <span>Model Benchmarks ↓</span>
          </a>
        </div>

        {/* Metadata Grid */}
        <dl className="mt-12 grid grid-cols-2 gap-4 rounded-xl border border-line bg-surface/50 p-5 sm:grid-cols-4 sm:gap-6 sm:p-6">
          <div>
            <dt className="label-mono text-[10px]">PROJECT TYPE</dt>
            <dd className="mt-1 font-mono text-xs font-semibold text-foreground sm:text-sm">
              Final-Year Group Project
            </dd>
          </div>
          <div>
            <dt className="label-mono text-[10px]">TIMELINE</dt>
            <dd className="mt-1 font-mono text-xs font-semibold text-foreground sm:text-sm">
              2025 — 2026
            </dd>
          </div>
          <div>
            <dt className="label-mono text-[10px]">TEAM & ROLE</dt>
            <dd className="mt-1 font-mono text-xs font-semibold text-foreground sm:text-sm">
              4 Members · Vision & ML Lead
            </dd>
          </div>
          <div>
            <dt className="label-mono text-[10px]">RESEARCH PAPER</dt>
            <dd className="mt-1 font-mono text-xs font-semibold text-lime sm:text-sm">
              Presented @ ICFISN 2026
            </dd>
          </div>
        </dl>
      </header>

      {/* 2. Problem & Solution */}
      <section aria-labelledby="problem-solution-heading" className="space-y-8">
        <h2 id="problem-solution-heading" className="label-mono text-lime">
          # 01 // OVERVIEW & PURPOSE
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface/60 p-6 backdrop-blur-md">
            <div className="flex items-center gap-2 text-rose-400">
              <AlertTriangle className="size-4" aria-hidden="true" />
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider">
                The Problem
              </h3>
            </div>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Visually impaired people face daily friction reading printed text,
              verifying currency denominations during physical transactions,
              identifying nearby household objects, and anticipating obstacle
              hazards while navigating.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground/80">
              Existing assistive tools are fragmented into siloed,
              single-purpose apps that require high-speed internet connectivity,
              introduce cloud round-trip latency, and pose privacy concerns when
              streaming camera feeds externally.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-surface/60 p-6 backdrop-blur-md">
            <div className="flex items-center gap-2 text-lime">
              <CheckCircle2 className="size-4" aria-hidden="true" />
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider">
                The Engineering Solution
              </h3>
            </div>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              RETINA unites four critical assistive tasks into a single native
              Android app that runs completely on-device without cloud
              dependencies.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground/80">
              By using CameraX for continuous live frame feeds and quantised
              TensorFlow Lite models, the system processes visual inputs locally
              in real time, converting raw detection coordinates and depth
              gradients into intuitive spoken feedback and directional cues.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Visual System Architecture */}
      <section
        id="architecture"
        aria-labelledby="architecture-heading"
        className="space-y-8"
      >
        <div>
          <h2 id="architecture-heading" className="label-mono text-lime">
            # 02 // SYSTEM ARCHITECTURE & DATA FLOW
          </h2>
          <p className="mt-2 font-display text-2xl sm:text-3xl">
            Modular On-Device Inference Pipeline
          </p>
        </div>

        {/* Clean Schematic Diagram */}
        <div className="rounded-xl border border-line bg-surface/70 p-6 backdrop-blur-md sm:p-8">
          <div className="grid gap-6 lg:grid-cols-4">
            {/* Stage 1: Input */}
            <div className="flex flex-col justify-between rounded-lg border border-line/80 bg-background/60 p-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-lime">
                    STAGE 01
                  </span>
                  <Camera className="size-4 text-lime" aria-hidden="true" />
                </div>
                <h3 className="mt-2 font-display text-lg">Camera Input</h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  Android CameraX API
                </p>
              </div>
              <ul className="mt-4 space-y-1.5 font-mono text-[11px] text-muted-foreground/80">
                <li>• Live YUV_420_888 stream</li>
                <li>• Non-blocking analysis</li>
                <li>• Stale buffer discard</li>
              </ul>
            </div>

            {/* Stage 2: Dispatcher */}
            <div className="flex flex-col justify-between rounded-lg border border-line/80 bg-background/60 p-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-lime">
                    STAGE 02
                  </span>
                  <Layers className="size-4 text-lime" aria-hidden="true" />
                </div>
                <h3 className="mt-2 font-display text-lg">Frame Dispatcher</h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  Active Mode Controller
                </p>
              </div>
              <ul className="mt-4 space-y-1.5 font-mono text-[11px] text-muted-foreground/80">
                <li>• Gesture-based selector</li>
                <li>• Frame pre-processing</li>
                <li>• RGB rotation & crop</li>
              </ul>
            </div>

            {/* Stage 3: Inference Modules */}
            <div className="flex flex-col justify-between rounded-lg border border-lime/50 bg-background/80 p-4 shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-lime">
                    STAGE 03
                  </span>
                  <Cpu className="size-4 text-lime" aria-hidden="true" />
                </div>
                <h3 className="mt-2 font-display text-lg">On-Device Models</h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  TensorFlow Lite & ML Kit
                </p>
              </div>
              <ul className="mt-4 space-y-1.5 font-mono text-[11px] text-muted-foreground">
                <li>
                  • <strong className="text-foreground">OCR:</strong> ML Kit
                  Text
                </li>
                <li>
                  • <strong className="text-foreground">Currency:</strong>{" "}
                  YOLOv8n
                </li>
                <li>
                  • <strong className="text-foreground">Objects:</strong>{" "}
                  EfficientDet
                </li>
                <li>
                  • <strong className="text-foreground">Depth:</strong> MiDaS
                  v2.1
                </li>
              </ul>
            </div>

            {/* Stage 4: Output */}
            <div className="flex flex-col justify-between rounded-lg border border-line/80 bg-background/60 p-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-lime">
                    STAGE 04
                  </span>
                  <Volume2 className="size-4 text-lime" aria-hidden="true" />
                </div>
                <h3 className="mt-2 font-display text-lg">Audio Feedback</h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  Android TTS & AudioTrack
                </p>
              </div>
              <ul className="mt-4 space-y-1.5 font-mono text-[11px] text-muted-foreground/80">
                <li>• Synthesized speech output</li>
                <li>• Left/Center/Right audio</li>
                <li>• Proximity hazard beeps</li>
              </ul>
            </div>
          </div>

          {/* Architecture Legend */}
          <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-line/60 pt-4 font-mono text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-surface border border-line" />
              <span>Android System APIs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-lime/30 border border-lime" />
              <span>Quantised Neural Models</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-background border border-line/80" />
              <span>Custom Post-Processing Logic</span>
            </div>
          </div>

          {/* Data Flow Description */}
          <div className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              The visual pipeline begins with Android’s CameraX API streaming
              frames via an{" "}
              <code className="rounded bg-surface px-1.5 py-0.5 text-xs text-lime font-mono">
                ImageAnalysis
              </code>{" "}
              use-case. Frames are routed to an off-screen background executor
              where image orientation is corrected and RGB buffers are
              normalised.
            </p>
            <p>
              Depending on the user’s selected module, the normalised frame is
              fed into the respective neural network running on TensorFlow Lite
              runtime or Google ML Kit. Raw tensor outputs—such as bounding
              boxes, class probabilities, or 2D depth matrices—are decoded by
              custom post-processing routines to filter noise and suppress
              duplicate proposals.
            </p>
            <p>
              Finally, spatial interpretations are synthesized into speech
              phrases via Android’s native Text-to-Speech (TTS) engine, with
              obstacle alerts modulating pitch and channel panning based on
              proximity.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Deep Module Breakdowns */}
      <section aria-labelledby="modules-heading" className="space-y-8">
        <div>
          <h2 id="modules-heading" className="label-mono text-lime">
            # 03 // CORE ASSISTIVE MODULES
          </h2>
          <p className="mt-2 font-display text-2xl sm:text-3xl">
            Detailed Module Engineering
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Module 1: Text Reader */}
          <div className="flex flex-col justify-between rounded-xl border border-line bg-surface/60 p-6 backdrop-blur-md">
            <div>
              <div className="flex items-center justify-between border-b border-line/60 pb-3">
                <span className="font-mono text-xs font-semibold text-lime">
                  01 // TEXT READER
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  ON-DEVICE OCR
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl">
                Document & Sign Reading
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Extracts printed text from bills, medication bottles, packaging,
                and navigation signs, reading it aloud through TTS.
              </p>

              <div className="mt-4 rounded-lg border border-line/60 bg-background/60 p-3 font-mono text-xs">
                <p className="text-[10px] text-muted-foreground">
                  AUDIO OUTPUT SIMULATION
                </p>
                <p className="mt-1 text-lime">
                  "Ingredients: 100% Whole Grain Oats. Best before March 2027."
                </p>
              </div>

              <div className="mt-4 space-y-2 text-xs leading-relaxed text-muted-foreground">
                <p>
                  • <strong>Stack:</strong> Google ML Kit Text Recognition v2,
                  CameraX, Android TTS.
                </p>
                <p>
                  • <strong>Engineering Detail:</strong> Runs completely
                  offline. Implements text-difference hashing to avoid annoying
                  repetitive vocalisation when the camera remains pointed at the
                  same sentence.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-line/60 pt-3">
              {["Google ML Kit", "CameraX", "Offline OCR", "TTS"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-surface px-2 py-0.5 font-mono text-[10px] text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Module 2: Currency Reader */}
          <div className="flex flex-col justify-between rounded-xl border border-line bg-surface/60 p-6 backdrop-blur-md">
            <div>
              <div className="flex items-center justify-between border-b border-line/60 pb-3">
                <span className="font-mono text-xs font-semibold text-lime">
                  02 // CURRENCY READER
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  YOLOV8N TFLITE
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl">
                Indian Banknote Recognition
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Detects 6 Indian Rupee denominations (₹10, ₹20, ₹50, ₹100, ₹200,
                ₹500) under crumpled, angled, or low-light conditions.
              </p>

              <div className="mt-4 rounded-lg border border-line/60 bg-background/60 p-3 font-mono text-xs">
                <p className="text-[10px] text-muted-foreground">
                  TOTALIZER IN ACTION
                </p>
                <p className="mt-1 text-lime">
                  "₹500 note detected. Session running total: ₹720."
                </p>
              </div>

              <div className="mt-4 space-y-2 text-xs leading-relaxed text-muted-foreground">
                <p>
                  • <strong>Dataset:</strong> Custom dataset of 12,050 annotated
                  banknote images across 6 denominations.
                </p>
                <p>
                  • <strong>Engineering Detail:</strong> Uses custom Non-Maximum
                  Suppression (NMS) and a session-based **Currency Totalizer**
                  state machine so notes are tallied accurately without
                  double-counting.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-line/60 pt-3">
              {["YOLOv8n", "TensorFlow Lite", "Custom NMS", "Totalizer"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-surface px-2 py-0.5 font-mono text-[10px] text-foreground/80"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Module 3: Object Recognition */}
          <div className="flex flex-col justify-between rounded-xl border border-line bg-surface/60 p-6 backdrop-blur-md">
            <div>
              <div className="flex items-center justify-between border-b border-line/60 pb-3">
                <span className="font-mono text-xs font-semibold text-lime">
                  03 // OBJECT RECOGNITION
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  EFFICIENTDET LITE0
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl">
                Directional Scene Understanding
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Detects everyday indoor objects, identifying what is in the room
                and mapping bounding box centroids to spatial directions.
              </p>

              <div className="mt-4 rounded-lg border border-line/60 bg-background/60 p-3 font-mono text-xs">
                <p className="text-[10px] text-muted-foreground">
                  DIRECTIONAL CUE EXAMPLE
                </p>
                <p className="mt-1 text-lime">
                  "Chair on your left. Bottle directly ahead on table."
                </p>
              </div>

              <div className="mt-4 space-y-2 text-xs leading-relaxed text-muted-foreground">
                <p>
                  • <strong>Stack:</strong> EfficientDet Lite0, TFLite Task
                  Vision library.
                </p>
                <p>
                  • <strong>Engineering Detail:</strong> Maps normalized
                  bounding box coordinates into three horizontal angular sectors
                  (Left, Center, Right) to produce actionable spatial language
                  rather than bare labels.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-line/60 pt-3">
              {["EfficientDet Lite0", "TFLite Task", "Spatial Mapping"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-surface px-2 py-0.5 font-mono text-[10px] text-foreground/80"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Module 4: Obstacle Detection */}
          <div className="flex flex-col justify-between rounded-xl border border-line bg-surface/60 p-6 backdrop-blur-md">
            <div>
              <div className="flex items-center justify-between border-b border-line/60 pb-3">
                <span className="font-mono text-xs font-semibold text-lime">
                  04 // OBSTACLE DETECTION
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  MIDAS V2.1 SMALL
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl">
                Monocular Depth Awareness
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Estimates relative depth from a standard 2D camera feed to alert
                users of sudden ground changes, walls, or furniture hazards.
              </p>

              <div className="mt-4 rounded-lg border border-line/60 bg-background/60 p-3 font-mono text-xs">
                <p className="text-[10px] text-muted-foreground">
                  PROXIMITY WARNING
                </p>
                <p className="mt-1 text-lime">
                  "Warning: Close obstacle directly in your path."
                </p>
              </div>

              <div className="mt-4 space-y-2 text-xs leading-relaxed text-muted-foreground">
                <p>
                  • <strong>Stack:</strong> MiDaS v2.1 Small, Android AudioTrack
                  tone generator.
                </p>
                <p>
                  • <strong>Engineering Detail:</strong> Divides the dense depth
                  matrix into left, center, and right sectors, evaluating
                  95th-percentile proximity to trigger urgent alerts only for
                  imminent collision trajectories.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-line/60 pt-3">
              {["MiDaS v2.1 Small", "Inverse Depth", "Proximity Audio"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-surface px-2 py-0.5 font-mono text-[10px] text-foreground/80"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Performance Analysis & Benchmarks */}
      <section
        id="performance"
        aria-labelledby="benchmarks-heading"
        className="space-y-8"
      >
        <div>
          <h2 id="benchmarks-heading" className="label-mono text-lime">
            # 04 // PERFORMANCE ANALYSIS & BENCHMARKS
          </h2>
          <p className="mt-2 font-display text-2xl sm:text-3xl">
            Reported Evaluation Metrics
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Numerical results reported in project research & evaluation
            (presentation pp. 22–25).
          </p>
        </div>

        {/* Benchmark Tables Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* OCR Metrics */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-line/60 pb-3">
              <span className="font-mono text-xs font-semibold text-foreground">
                OCR · ML Kit Text Recognition
              </span>
              <Scan className="size-4 text-lime" aria-hidden="true" />
            </div>
            <div className="mt-4 divide-y divide-line/40 font-mono text-xs">
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">
                  Character Recognition Accuracy
                </span>
                <span className="font-semibold text-lime">96.40%</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">
                  Word Recognition Accuracy
                </span>
                <span className="font-semibold text-lime">94.10%</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">
                  Character Error Rate (CER)
                </span>
                <span className="text-foreground">0.036</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">
                  Avg Processing Time per Frame
                </span>
                <span className="text-foreground">120 ms</span>
              </div>
            </div>
          </div>

          {/* Currency Metrics */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-line/60 pb-3">
              <span className="font-mono text-xs font-semibold text-foreground">
                Currency Detection · YOLOv8n TFLite
              </span>
              <Boxes className="size-4 text-lime" aria-hidden="true" />
            </div>
            <div className="mt-4 divide-y divide-line/40 font-mono text-xs">
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Precision</span>
                <span className="font-semibold text-lime">0.97</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Recall</span>
                <span className="font-semibold text-lime">0.95</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">F1-Score</span>
                <span className="font-semibold text-lime">0.96</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">mAP @ IoU 0.5</span>
                <span className="font-semibold text-lime">0.94</span>
              </div>
            </div>
          </div>

          {/* Object Detection Metrics */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-line/60 pb-3">
              <span className="font-mono text-xs font-semibold text-foreground">
                Object Detection · EfficientDet Lite0
              </span>
              <Compass className="size-4 text-lime" aria-hidden="true" />
            </div>
            <div className="mt-4 divide-y divide-line/40 font-mono text-xs">
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Precision</span>
                <span className="text-foreground">0.94</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Recall</span>
                <span className="text-foreground">0.92</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">F1-Score</span>
                <span className="text-foreground">0.93</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">mAP @ IoU 0.5</span>
                <span className="text-foreground">0.91</span>
              </div>
            </div>
          </div>

          {/* Obstacle Depth Metrics */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-line/60 pb-3">
              <span className="font-mono text-xs font-semibold text-foreground">
                Depth Awareness · MiDaS v2.1 Small
              </span>
              <Activity className="size-4 text-lime" aria-hidden="true" />
            </div>
            <div className="mt-4 divide-y divide-line/40 font-mono text-xs">
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">
                  Relative Depth Error
                </span>
                <span className="text-foreground">0.126</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">
                  Threshold Accuracy (δ &lt; 1.25)
                </span>
                <span className="font-semibold text-lime">84.1%</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">
                  On-Device CPU Latency
                </span>
                <span className="font-semibold text-lime">52 ms</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">
                  MiDaS Large Latency (Discarded)
                </span>
                <span className="text-rose-400">450 ms</span>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Note */}
        <div className="rounded-lg border border-line/80 bg-surface/40 p-4 font-mono text-xs text-muted-foreground">
          <div className="flex items-center gap-2 text-foreground font-semibold">
            <Info className="size-4 text-lime" aria-hidden="true" />
            <span>Evaluation Methodology & Measurement Context</span>
          </div>
          <p className="mt-2 leading-relaxed">
            The currency dataset consisted of 12,050 annotated images across 6
            denominations under multiple rotational angles and varying ambient
            lighting conditions. Model inference times represent raw model
            execution on mobile CPU hardware; full end-to-end response times
            include camera buffer acquisition, image formatting, and
            Text-to-Speech synthesis queueing.
          </p>
        </div>
      </section>

      {/* 6. Technical Decisions & Trade-Offs */}
      <section aria-labelledby="decisions-heading" className="space-y-8">
        <div>
          <h2 id="decisions-heading" className="label-mono text-lime">
            # 05 // ARCHITECTURAL DECISIONS & TRADE-OFFS
          </h2>
          <p className="mt-2 font-display text-2xl sm:text-3xl">
            Why Specific Technologies Were Chosen
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-line bg-surface/60">
          <table className="w-full text-left font-mono text-xs">
            <thead className="border-b border-line bg-surface text-muted-foreground">
              <tr>
                <th className="p-4 font-semibold uppercase text-foreground">
                  Decision
                </th>
                <th className="p-4 font-semibold uppercase text-foreground">
                  Alternative Considered
                </th>
                <th className="p-4 font-semibold uppercase text-foreground">
                  Engineering Trade-Off & Rationale
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/40">
              <tr>
                <td className="p-4 font-semibold text-lime">
                  YOLOv8n for Currency
                </td>
                <td className="p-4 text-muted-foreground">
                  SSD MobileNet / YOLOv8s
                </td>
                <td className="p-4 text-muted-foreground/90">
                  Selected for lightweight footprint (&lt;12 MB) and fast
                  inference. Custom anchor tuning resolved thin rectangular note
                  aspect ratios better than general SSD anchors.
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-lime">
                  MiDaS v2.1 Small
                </td>
                <td className="p-4 text-muted-foreground">MiDaS v2.1 Large</td>
                <td className="p-4 text-muted-foreground/90">
                  Large variant required <strong>450 ms</strong> CPU
                  time—unacceptable for walking navigation. The Small variant
                  runs in <strong>52 ms</strong> (8.6× faster), accepting
                  slightly lower depth fidelity for immediate hazard awareness.
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-lime">
                  100% On-Device Processing
                </td>
                <td className="p-4 text-muted-foreground">Cloud Vision APIs</td>
                <td className="p-4 text-muted-foreground/90">
                  Guarantees functionality in basements, rural transit, or
                  spotty connectivity. Camera streams never leave device memory,
                  preserving user privacy.
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-lime">
                  Audio & Directional Haptics
                </td>
                <td className="p-4 text-muted-foreground">
                  Visual bounding-box UI
                </td>
                <td className="p-4 text-muted-foreground/90">
                  Target users cannot rely on on-screen labels. Translated raw
                  (x, y) box centers into spoken spatial language: "left",
                  "center", "right".
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. Engineering Challenges & Solutions */}
      <section aria-labelledby="challenges-heading" className="space-y-8">
        <div>
          <h2 id="challenges-heading" className="label-mono text-lime">
            # 06 // CHALLENGES & IMPLEMENTATION SOLUTIONS
          </h2>
          <p className="mt-2 font-display text-2xl sm:text-3xl">
            Overcoming Real-World Engineering Hurdles
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface/60 p-6 backdrop-blur-md">
            <span className="font-mono text-xs font-semibold text-lime">
              CHALLENGE 01
            </span>
            <h3 className="mt-2 font-display text-xl">
              CameraX Buffer Congestion
            </h3>
            <p className="mt-2 text-xs text-muted-foreground">
              <strong>Problem:</strong> Running inference directly on 30 FPS
              camera feeds caused backlog queues, thermal throttling, and
              multi-second UI freezes.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-foreground/90">
              <strong>Solution:</strong> Configured CameraX with{" "}
              <code className="rounded bg-surface px-1 py-0.5 font-mono text-[11px] text-lime">
                STRATEGY_KEEP_ONLY_LATEST
              </code>{" "}
              paired with an asynchronous single-thread executor. Frames
              arriving while a model is inferencing are dropped immediately,
              guaranteeing the freshest possible frame is analyzed without queue
              lag.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-surface/60 p-6 backdrop-blur-md">
            <span className="font-mono text-xs font-semibold text-lime">
              CHALLENGE 02
            </span>
            <h3 className="mt-2 font-display text-xl">
              OCR Announcement Echoing
            </h3>
            <p className="mt-2 text-xs text-muted-foreground">
              <strong>Problem:</strong> When holding a document still, ML Kit
              detected the same headline every 120 ms, causing the TTS engine to
              stutter and repeat words endlessly.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-foreground/90">
              <strong>Solution:</strong> Implemented a Levenshtein similarity
              cache with a 4-second sliding window. Newly discovered sentences
              are queued immediately, while text blocks sharing &gt;80% string
              similarity with recently spoken phrases are suppressed.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-surface/60 p-6 backdrop-blur-md">
            <span className="font-mono text-xs font-semibold text-lime">
              CHALLENGE 03
            </span>
            <h3 className="mt-2 font-display text-xl">
              Banknote Proposal Overlap
            </h3>
            <p className="mt-2 text-xs text-muted-foreground">
              <strong>Problem:</strong> Folded notes or notes with visible
              denomination numerals in corners triggered multiple bounding boxes
              for the same bill.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-foreground/90">
              <strong>Solution:</strong> Built a custom Non-Maximum Suppression
              layer tuned specifically for currency aspect ratios, requiring an
              IoU threshold of 0.45 and class confidence &gt;0.75 before
              committing to the session tally.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-surface/60 p-6 backdrop-blur-md">
            <span className="font-mono text-xs font-semibold text-lime">
              CHALLENGE 04
            </span>
            <h3 className="mt-2 font-display text-xl">
              Spatial Depth Quantisation
            </h3>
            <p className="mt-2 text-xs text-muted-foreground">
              <strong>Problem:</strong> MiDaS outputs raw relative inverse depth
              matrices that vary by environment and cannot be mapped to physical
              centimeters without stereo lenses.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-foreground/90">
              <strong>Solution:</strong> Segmented the depth matrix into Left,
              Center, and Right zones. Computed the 90th-percentile closest
              depth value per zone to detect relative collision gradients,
              triggering acoustic proximity beeps when a central obstacle
              rapidly encroaches.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Accessibility as an Engineering Discipline */}
      <section
        aria-labelledby="a11y-heading"
        className="space-y-6 rounded-xl border border-line bg-surface/40 p-6 backdrop-blur-md sm:p-8"
      >
        <div>
          <h2 id="a11y-heading" className="label-mono text-lime">
            # 07 // ACCESSIBILITY-FIRST ENGINEERING
          </h2>
          <p className="mt-2 font-display text-2xl sm:text-3xl">
            Designing for Non-Visual Operation
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-line/60 bg-background/50 p-4">
            <Smartphone className="size-5 text-lime" aria-hidden="true" />
            <h3 className="mt-2 font-display text-lg">Gesture Navigation</h3>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              Full-screen two-finger horizontal swipe cycles between modules
              (OCR, Currency, Objects, Depth) without needing visual touch
              targets.
            </p>
          </div>

          <div className="rounded-lg border border-line/60 bg-background/50 p-4">
            <Volume2 className="size-5 text-lime" aria-hidden="true" />
            <h3 className="mt-2 font-display text-lg">Spoken Confirmations</h3>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              Every system state change, mode switch, and battery warning is
              vocalized immediately through priority audio channels.
            </p>
          </div>

          <div className="rounded-lg border border-line/60 bg-background/50 p-4">
            <Zap className="size-5 text-lime" aria-hidden="true" />
            <h3 className="mt-2 font-display text-lg">Haptic Pointers</h3>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              Haptic click feedback confirms touch registration, giving
              non-visual reassurance that an action has been received by the
              app.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Limitations & Future Scope */}
      <section aria-labelledby="limitations-heading" className="space-y-6">
        <div>
          <h2 id="limitations-heading" className="label-mono text-lime">
            # 08 // BOUNDARIES & FUTURE SCOPE
          </h2>
          <p className="mt-2 font-display text-2xl sm:text-3xl">
            Engineering Honesty & Roadmap
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface/60 p-6 backdrop-blur-md">
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShieldAlert className="size-4 text-lime" aria-hidden="true" />
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                Verified Limitations
              </h3>
            </div>
            <ul className="mt-4 space-y-2.5 font-mono text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-lime">•</span>
                <span>
                  <strong>Relative vs Metric Depth:</strong> Monocular depth
                  predictions provide relative gradient proximity, not
                  calibrated centimeter measurements.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime">•</span>
                <span>
                  <strong>Environmental Constraints:</strong> Rapid camera
                  motion or low ambient lighting reduces detection confidence
                  and increases OCR error rates.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime">•</span>
                <span>
                  <strong>Auxiliary Aid:</strong> Designed as an intelligent
                  assistive aid; must not be treated as a replacement for white
                  canes or formal mobility training.
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-line bg-surface/60 p-6 backdrop-blur-md">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="size-4 text-lime" aria-hidden="true" />
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                Future Roadmap
              </h3>
            </div>
            <ul className="mt-4 space-y-2.5 font-mono text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-lime">•</span>
                <span>
                  <strong>Context Auto-Detection:</strong> Unified classifier to
                  automatically switch between OCR, Currency, and Obstacles
                  based on scene semantics.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime">•</span>
                <span>
                  <strong>Haptic Belt Integration:</strong> BLE connection to
                  wearable waist vibrating motors for silent directional
                  navigation.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime">•</span>
                <span>
                  <strong>iOS Port:</strong> Re-implement core inference using
                  Apple Core ML and Vision framework.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 10. Research Presentation Card */}
      {project.researchPaper && (
        <section aria-labelledby="research-heading" className="space-y-4">
          <h2 id="research-heading" className="label-mono text-lime">
            # 09 // ACADEMIC RESEARCH & CONFERENCE
          </h2>

          <div className="rounded-xl border border-line bg-surface/70 p-6 backdrop-blur-md sm:p-8">
            <div className="flex flex-col gap-2 border-b border-line/60 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <FileText className="size-5 text-lime" aria-hidden="true" />
                <h3 className="font-display text-xl text-foreground sm:text-2xl">
                  {project.researchPaper.title}
                </h3>
              </div>
              <span className="font-mono text-xs font-semibold text-lime">
                Oral Presentation
              </span>
            </div>

            <dl className="mt-4 grid grid-cols-1 gap-3 font-mono text-xs text-muted-foreground sm:grid-cols-2">
              <div>
                <dt className="text-[10px] uppercase text-muted-foreground/70">
                  CONFERENCE
                </dt>
                <dd className="mt-0.5 text-foreground">
                  {project.researchPaper.conference}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase text-muted-foreground/70">
                  DATES & VENUE
                </dt>
                <dd className="mt-0.5 text-foreground">
                  {project.researchPaper.dates} ·{" "}
                  {project.researchPaper.location}
                </dd>
              </div>
            </dl>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {project.researchPaper.description}
            </p>
          </div>
        </section>
      )}

      {/* 11. Previous / Next Project Navigation */}
      <footer className="border-t border-line pt-12">
        <nav
          aria-label="Previous and next projects"
          className="grid gap-4 sm:grid-cols-2"
        >
          <Link
            to="/projects/$slug"
            params={{ slug: previous.slug }}
            data-crosshair-target
            aria-label={`Previous project: ${previous.name}`}
            className="group flex min-h-28 flex-col justify-between rounded-xl border border-line bg-surface/50 p-5 transition-all duration-200 hover:border-lime/60 hover:bg-surface/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 sm:min-h-32"
          >
            <span className="label-mono text-muted-foreground transition-colors group-hover:text-lime">
              <span aria-hidden="true">← </span>previous project
            </span>
            <span className="break-words font-display text-2xl leading-tight transition-all group-hover:translate-x-1 group-hover:italic group-hover:text-lime sm:text-3xl">
              {previous.name}
            </span>
          </Link>

          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            data-crosshair-target
            aria-label={`Next project: ${next.name}`}
            className="group flex min-h-28 flex-col items-start justify-between rounded-xl border border-line bg-surface/50 p-5 transition-all duration-200 hover:border-lime/60 hover:bg-surface/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 sm:min-h-32 sm:items-end sm:text-right"
          >
            <span className="label-mono text-muted-foreground transition-colors group-hover:text-lime">
              next project <span aria-hidden="true">→</span>
            </span>
            <span className="break-words font-display text-2xl leading-tight transition-all group-hover:translate-x-1 group-hover:italic group-hover:text-lime sm:text-3xl">
              {next.name}
            </span>
          </Link>
        </nav>

        <div className="mt-8 text-center">
          <Link
            to="/projects"
            data-crosshair-target
            className="label-mono inline-flex min-h-10 items-center justify-center transition-colors hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2"
          >
            ← return to project archive
          </Link>
        </div>
      </footer>
    </div>
  );
}
