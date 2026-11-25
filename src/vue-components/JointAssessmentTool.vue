<template>
  <div class="bg-[#FFFFFF] border border-[#E8E5DE] rounded-xl p-6 sm:p-8 shadow-sm">
    <div class="flex items-center gap-3 mb-6">
      <div class="w-10 h-10 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center justify-center text-[#BE8C1D]">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      </div>
      <div>
        <span class="text-xs uppercase tracking-wider font-semibold text-[#BE8C1D] block">Interactive Patient Tool (Vue.js Powered)</span>
        <h3 class="text-xl sm:text-2xl font-bold text-[#111111]" style="font-family: 'Maven Pro', sans-serif;">Joint Pain & Mobility Self-Assessment</h3>
      </div>
    </div>

    <!-- Step Progress Bar -->
    <div class="mb-8">
      <div class="flex justify-between text-xs font-medium text-[#475569] mb-2">
        <span>Step {{ currentStep }} of 3: {{ stepTitle }}</span>
        <span>{{ Math.round((currentStep / 3) * 100) }}% Complete</span>
      </div>
      <div class="w-full bg-[#FAF8F2] h-2 rounded-full overflow-hidden border border-[#E8E5DE]">
        <div 
          class="bg-[#BE8C1D] h-full transition-all duration-300 ease-out" 
          :style="{ width: `${(currentStep / 3) * 100}%` }"
        ></div>
      </div>
    </div>

    <!-- Step 1: Select Affected Joint & Duration -->
    <div v-if="currentStep === 1" class="space-y-6">
      <div>
        <label class="block text-sm font-semibold text-[#111111] mb-2">Select Affected Joint or Area:</label>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <button 
            v-for="joint in joints" 
            :key="joint.id"
            type="button"
            @click="selectedJoint = joint.id"
            :class="[
              'p-3.5 text-left rounded-lg border text-sm font-medium transition-all duration-150',
              selectedJoint === joint.id 
                ? 'border-[#BE8C1D] bg-[#FAF8F2] text-[#111111] shadow-xs ring-1 ring-[#BE8C1D]' 
                : 'border-[#E8E5DE] bg-white text-[#475569] hover:border-[#BE8C1D]/60'
            ]"
          >
            <span class="block font-semibold text-[#111111]">{{ joint.name }}</span>
            <span class="text-xs text-[#475569]">{{ joint.desc }}</span>
          </button>
        </div>
      </div>

      <div>
        <label class="block text-sm font-semibold text-[#111111] mb-2">How long have you been experiencing this discomfort?</label>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <label 
            v-for="dur in durations" 
            :key="dur.value"
            class="flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition-colors"
            :class="selectedDuration === dur.value ? 'border-[#BE8C1D] bg-[#FAF8F2]' : 'border-[#E8E5DE] hover:border-gray-300'"
          >
            <input 
              type="radio" 
              name="duration" 
              :value="dur.value" 
              v-model="selectedDuration" 
              class="accent-[#BE8C1D]" 
            />
            <span class="text-sm font-medium text-[#111111]">{{ dur.label }}</span>
          </label>
        </div>
      </div>

      <div class="flex justify-end pt-4 border-t border-[#E8E5DE]">
        <button 
          type="button" 
          @click="currentStep = 2" 
          :disabled="!selectedJoint"
          class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next: Pain & Symptoms &rarr;
        </button>
      </div>
    </div>

    <!-- Step 2: Pain Level & Specific Symptoms -->
    <div v-else-if="currentStep === 2" class="space-y-6">
      <div>
        <div class="flex justify-between items-center mb-2">
          <label class="text-sm font-semibold text-[#111111]">Rate Pain Severity (1 = Mild, 10 = Severe):</label>
          <span class="px-2.5 py-0.5 rounded text-sm font-bold bg-[#FAF8F2] border border-[#E8E5DE] text-[#BE8C1D]">
            {{ painLevel }} / 10 - {{ getPainText(painLevel) }}
          </span>
        </div>
        <input 
          type="range" 
          min="1" 
          max="10" 
          v-model.number="painLevel" 
          class="w-full accent-[#BE8C1D] cursor-pointer h-2 bg-[#FAF8F2] rounded-lg border border-[#E8E5DE]" 
        />
        <div class="flex justify-between text-xs text-[#475569] mt-1">
          <span>Mild ache</span>
          <span>Moderate discomfort</span>
          <span>Severe / Incapacitating</span>
        </div>
      </div>

      <div>
        <label class="block text-sm font-semibold text-[#111111] mb-2">Select Any Associated Symptoms:</label>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <label 
            v-for="sym in symptomsList" 
            :key="sym.id"
            class="flex items-start gap-2.5 p-3 border rounded-lg cursor-pointer transition-colors"
            :class="selectedSymptoms.includes(sym.id) ? 'border-[#BE8C1D] bg-[#FAF8F2]' : 'border-[#E8E5DE] hover:border-gray-300'"
          >
            <input 
              type="checkbox" 
              :value="sym.id" 
              v-model="selectedSymptoms"
              class="mt-1 accent-[#BE8C1D] rounded"
            />
            <span class="text-sm text-[#111111]">{{ sym.label }}</span>
          </label>
        </div>
      </div>

      <div class="flex justify-between pt-4 border-t border-[#E8E5DE]">
        <button 
          type="button" 
          @click="currentStep = 1" 
          class="btn-secondary"
        >
          &larr; Back
        </button>
        <button 
          type="button" 
          @click="currentStep = 3" 
          class="btn-primary"
        >
          View Assessment Summary &rarr;
        </button>
      </div>
    </div>

    <!-- Step 3: Personalized Guidance & Clinical Action -->
    <div v-else-if="currentStep === 3" class="space-y-6">
      <div class="p-4 bg-[#FAF8F2] border border-[#BE8C1D]/30 rounded-lg">
        <h4 class="text-lg font-bold text-[#111111] mb-2" style="font-family: 'Maven Pro', sans-serif;">
          Assessment Summary for {{ getJointName(selectedJoint) }} Discomfort
        </h4>
        <p class="text-sm text-[#475569] leading-relaxed">
          Based on your reported pain level of <strong>{{ painLevel }}/10</strong> with symptoms persisting for <strong>{{ getDurationText(selectedDuration) }}</strong>, clinical evaluation by an orthopaedic surgeon is recommended to assess joint surfaces, ligamentous integrity, and prevent cartilage deterioration.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 border border-[#E8E5DE] rounded-lg bg-white">
          <h5 class="text-sm font-bold text-[#111111] mb-2 uppercase tracking-wider">Suggested Discussion Points:</h5>
          <ul class="text-sm text-[#475569] space-y-1.5 list-disc list-inside">
            <li>Is weight-bearing X-ray or MRI indicated?</li>
            <li>Are non-operative options (physiotherapy, injections) sufficient?</li>
            <li>Would minimally invasive arthroscopy or joint preservation help?</li>
            <li>Safe physical activity and posture adjustments.</li>
          </ul>
        </div>

        <div class="p-4 border border-[#E8E5DE] rounded-lg bg-white flex flex-col justify-between">
          <div>
            <h5 class="text-sm font-bold text-[#111111] mb-2 uppercase tracking-wider">Consultation Details:</h5>
            <p class="text-sm text-[#475569] mb-1">
              <strong>Dr. Mazhar Rafique</strong><br />
              BNI - Bashir NeuroSpine Institute<br />
              18 Jail Rd, Shadman 1, Lahore
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-[#E8E5DE] space-y-2">
            <!-- 1st Main CTA: WhatsApp Appointment -->
            <a 
              :href="`https://wa.me/923105033337?text=${encodeURIComponent(`Hello Dr. Mazhar Rafique Clinic, I completed the self-assessment for my ${getJointName(selectedJoint)} with pain level ${painLevel}/10 (${getDurationText(selectedDuration)}). I would like to book a consultation.`)}`" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="w-full py-2.5 px-3 rounded-xl font-bold text-white bg-[#BE8C1D] hover:bg-[#936A12] transition-colors flex items-center justify-center gap-2 text-xs shadow-md text-center"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="white" class="shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>WhatsApp Appointment with Assessment</span>
            </a>
            <!-- 2nd Main CTA: Call Appointment -->
            <a href="tel:+923105033337" class="w-full py-2 px-3 rounded-xl font-semibold border border-[#E8E5DE] bg-[#FAF8F2] hover:bg-white text-[#111111] text-xs flex items-center justify-center gap-1.5 text-center">
              <span>Call: 0310 5033337</span>
            </a>
          </div>
        </div>
      </div>

      <div class="text-xs text-[#475569] bg-white p-3 border border-[#E8E5DE] rounded-md">
        <strong>Important Medical Notice:</strong> This interactive questionnaire provides general educational awareness and does not replace an in-person physical examination or radiographic diagnostic workup by a licensed medical practitioner.
      </div>

      <div class="flex justify-between pt-4 border-t border-[#E8E5DE]">
        <button 
          type="button" 
          @click="resetAssessment" 
          class="btn-secondary"
        >
          Start Over
        </button>
        <a 
          href="/contact/" 
          class="text-sm font-semibold text-[#111111] hover:text-[#936A12] underline flex items-center gap-1 self-center"
        >
          View Clinic Directions &rarr;
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const currentStep = ref(1);
const selectedJoint = ref('knee');
const selectedDuration = ref('chronic');
const painLevel = ref(6);
const selectedSymptoms = ref<string[]>(['stiffness', 'stairs']);

const joints = [
  { id: 'knee', name: 'Knee Joint', desc: 'Arthritis, ACL, Meniscus' },
  { id: 'hip', name: 'Hip Joint', desc: 'Groin ache, stiffness, AVN' },
  { id: 'shoulder', name: 'Shoulder', desc: 'Rotator cuff, frozen shoulder' },
  { id: 'spine', name: 'Spine / Back', desc: 'Lower back, sciatica' },
  { id: 'ankle', name: 'Foot & Ankle', desc: 'Sprains, bunions, Achilles' },
  { id: 'hand', name: 'Hand & Wrist', desc: 'Carpal tunnel, tendonitis' },
];

const durations = [
  { value: 'acute', label: 'Less than 2 weeks (Acute injury)' },
  { value: 'subacute', label: '2 weeks to 3 months' },
  { value: 'chronic', label: 'More than 3 months (Chronic)' },
];

const symptomsList = [
  { id: 'stiffness', label: 'Morning stiffness lasting over 30 minutes' },
  { id: 'swelling', label: 'Visible swelling or warmth around the joint' },
  { id: 'giving_way', label: 'Joint giving way, buckling, or feeling unstable' },
  { id: 'night_pain', label: 'Pain waking you up at night' },
  { id: 'stairs', label: 'Significant pain climbing stairs or standing up' },
  { id: 'locking', label: 'Catching, clicking, or mechanical locking' },
];

const stepTitle = computed(() => {
  if (currentStep.value === 1) return 'Select Affected Joint';
  if (currentStep.value === 2) return 'Pain & Symptoms';
  return 'Personalized Guidance';
});

function getPainText(val: number): string {
  if (val <= 3) return 'Mild';
  if (val <= 6) return 'Moderate';
  if (val <= 8) return 'Significant';
  return 'Severe';
}

function getJointName(id: string): string {
  const j = joints.find(x => x.id === id);
  return j ? j.name : 'Joint';
}

function getDurationText(val: string): string {
  const d = durations.find(x => x.value === val);
  return d ? d.label : val;
}

function resetAssessment() {
  currentStep.value = 1;
  selectedJoint.value = 'knee';
  painLevel.value = 6;
  selectedSymptoms.value = ['stiffness', 'stairs'];
}
</script>
