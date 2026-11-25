<template>
  <div class="bg-[#FFFFFF] border border-[#E8E5DE] rounded-xl p-6 sm:p-8 shadow-sm">
    <div class="flex items-center justify-between flex-wrap gap-4 mb-6">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center justify-center text-[#BE8C1D]">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div>
          <span class="text-xs uppercase tracking-wider font-semibold text-[#BE8C1D] block">Medical Education (Vue.js Interactive Station)</span>
          <h3 class="text-xl sm:text-2xl font-bold text-[#111111]" style="font-family: 'Maven Pro', sans-serif;">Orthopaedic OSPE Clinical Case Review</h3>
        </div>
      </div>
      <div class="text-right">
        <span class="text-xs text-[#475569] block">Score</span>
        <span class="text-lg font-bold text-[#BE8C1D]">{{ score }} / {{ questions.length }}</span>
      </div>
    </div>

    <!-- Station Info Card -->
    <div class="p-4 bg-[#FAF8F2] border border-[#E8E5DE] rounded-lg mb-6">
      <div class="flex justify-between items-center text-xs font-semibold text-[#475569] mb-1">
        <span>Station {{ activeIndex + 1 }} of {{ questions.length }}: {{ currentQuestion.stationType }}</span>
        <span class="px-2 py-0.5 bg-white border border-[#E8E5DE] rounded text-[#111111]">{{ currentQuestion.difficulty }}</span>
      </div>
      <p class="text-sm font-semibold text-[#111111]">{{ currentQuestion.scenario }}</p>
    </div>

    <!-- Question Prompt -->
    <div class="space-y-4 mb-6">
      <p class="text-base font-semibold text-[#111111]">{{ currentQuestion.prompt }}</p>

      <div class="space-y-2">
        <button
          v-for="(option, idx) in currentQuestion.options"
          :key="idx"
          type="button"
          @click="selectOption(idx)"
          :disabled="hasAnswered"
          :class="[
            'w-full text-left p-3.5 rounded-lg border text-sm transition-all flex items-start gap-3',
            getOptionClass(idx)
          ]"
        >
          <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border"
            :class="getBadgeClass(idx)"
          >
            {{ String.fromCharCode(65 + idx) }}
          </span>
          <span class="text-[#111111] leading-relaxed">{{ option }}</span>
        </button>
      </div>
    </div>

    <!-- Explanation Box (Appears after answer) -->
    <div v-if="hasAnswered" class="p-4 border rounded-lg mb-6" :class="isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'">
      <div class="flex items-center gap-2 mb-1">
        <span class="text-sm font-bold" :class="isCorrect ? 'text-emerald-800' : 'text-amber-800'">
          {{ isCorrect ? '✓ Correct Assessment' : '✕ Review Required' }}
        </span>
      </div>
      <p class="text-sm text-[#475569] leading-relaxed">
        <strong>Clinical Rationale:</strong> {{ currentQuestion.explanation }}
      </p>
    </div>

    <!-- Controls -->
    <div class="flex justify-between items-center pt-4 border-t border-[#E8E5DE]">
      <button
        type="button"
        @click="prevQuestion"
        :disabled="activeIndex === 0"
        class="btn-secondary py-2 text-sm disabled:opacity-40 disabled:cursor-not-allowed"
      >
        &larr; Previous Station
      </button>

      <button
        v-if="hasAnswered && activeIndex < questions.length - 1"
        type="button"
        @click="nextQuestion"
        class="btn-primary py-2 text-sm"
      >
        Next Station &rarr;
      </button>

      <button
        v-else-if="hasAnswered && activeIndex === questions.length - 1"
        type="button"
        @click="restartQuiz"
        class="btn-primary py-2 text-sm"
      >
        Restart OSPE Station &olarr;
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface OSPEStation {
  id: string;
  stationType: string;
  difficulty: string;
  scenario: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const activeIndex = ref(0);
const userAnswers = ref<(number | null)[]>([null, null, null]);
const score = ref(0);

const questions: OSPEStation[] = [
  {
    id: 's1',
    stationType: 'Clinical Examination & Ligament Testing',
    difficulty: 'FCPS Exam Core',
    scenario: 'A 24-year-old athlete sustained an acute non-contact deceleration and twisting injury during football with an audible pop and immediate hemarthrosis.',
    prompt: 'Which clinical test demonstrates the highest sensitivity for acute Anterior Cruciate Ligament (ACL) rupture during the initial bedside examination?',
    options: [
      'Lachman Test at 20-30 degrees of knee flexion',
      'Anterior Drawer Test at 90 degrees of flexion',
      'McMurray Test for meniscal pathology',
      'Pivot Shift Test under conscious guarded state'
    ],
    correctIndex: 0,
    explanation: 'The Lachman test has a documented sensitivity of over 95% for acute ACL insufficiency because hamstring spasm is minimized at 20-30 degrees of flexion, avoiding false negative drawer results.'
  },
  {
    id: 's2',
    stationType: 'Arthroplasty & Radiographic Interpretation',
    difficulty: 'Surgical Trainee Level',
    scenario: 'A 68-year-old female presents with severe medial joint space obliteration, subchondral sclerosis, and 8 degrees of varus deformity, refractory to conservative therapy.',
    prompt: 'Which anatomical landmark is prioritized to establish the neutral femoral component rotation during Total Knee Arthroplasty (TKA)?',
    options: [
      'Surgical transepicondylar axis (sTEA) or Whiteside line',
      'Posterior condylar line with fixed 10 degrees external rotation',
      'Anterior cortical line of the proximal tibia',
      'Tibial tuberosity medial border alone'
    ],
    correctIndex: 0,
    explanation: 'The surgical transepicondylar axis (connecting the lateral epicondylar prominence and the medial sulcus) and Whiteside line (anteroposterior trochlear groove) are validated primary references to ensure symmetric flexion gaps and optimal patellofemoral tracking.'
  },
  {
    id: 's3',
    stationType: 'Orthopaedic Trauma & ATLS® Protocol',
    difficulty: 'ATLS® Core Station',
    scenario: 'A 32-year-old motorcycle driver presents following a high-velocity road collision with an open Gustilo-Anderson Grade IIIA tibial shaft fracture.',
    prompt: 'According to ATLS® and British Orthopaedic Association (BOAST) guidelines, what is the most critical immediate pharmacologic and surgical intervention window?',
    options: [
      'Immediate IV broad-spectrum antibiotics within 1 hour, urgent photographic documentation, sterile dressing, and debridement within 12-24 hours',
      'Immediate bedside wound exploration and closure with local sutures',
      'Delayed antibiotics until intraoperative tissue cultures are taken',
      'Immediate permanent internal plating in emergency casualty bay without debridement'
    ],
    correctIndex: 0,
    explanation: 'Early administration of intravenous antibiotics (within 1 hour) substantially lowers deep infection rates. Urgent wound coverage with sterile saline dressing and scheduled multidisciplinary debridement under controlled theatre conditions is the standard of care.'
  }
];

const currentQuestion = computed(() => questions[activeIndex.value]);
const hasAnswered = computed(() => userAnswers.value[activeIndex.value] !== null);
const isCorrect = computed(() => userAnswers.value[activeIndex.value] === currentQuestion.value.correctIndex);

function selectOption(idx: number) {
  if (hasAnswered.value) return;
  userAnswers.value[activeIndex.value] = idx;
  if (idx === currentQuestion.value.correctIndex) {
    score.value += 1;
  }
}

function getOptionClass(idx: number) {
  if (!hasAnswered.value) {
    return 'border-[#E8E5DE] bg-white hover:border-[#BE8C1D]/60 hover:bg-[#FAF8F2]';
  }
  if (idx === currentQuestion.value.correctIndex) {
    return 'border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500';
  }
  if (userAnswers.value[activeIndex.value] === idx) {
    return 'border-amber-500 bg-amber-50 ring-1 ring-amber-500';
  }
  return 'border-[#E8E5DE] bg-gray-50 opacity-60';
}

function getBadgeClass(idx: number) {
  if (!hasAnswered.value) {
    return 'border-[#E8E5DE] bg-[#FAF8F2] text-[#475569]';
  }
  if (idx === currentQuestion.value.correctIndex) {
    return 'border-emerald-500 bg-emerald-600 text-white';
  }
  if (userAnswers.value[activeIndex.value] === idx) {
    return 'border-amber-500 bg-amber-600 text-white';
  }
  return 'border-gray-200 bg-gray-100 text-gray-400';
}

function nextQuestion() {
  if (activeIndex.value < questions.length - 1) {
    activeIndex.value += 1;
  }
}

function prevQuestion() {
  if (activeIndex.value > 0) {
    activeIndex.value -= 1;
  }
}

function restartQuiz() {
  activeIndex.value = 0;
  userAnswers.value = [null, null, null];
  score.value = 0;
}
</script>
