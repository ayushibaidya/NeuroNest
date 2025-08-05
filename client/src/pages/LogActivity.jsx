import MoodSelector from '../components/MoodSelector.jsx';
import DailyActivitySelector from '../components/DailyActivitySelector.jsx';
import PhysicalActivitySelector from '../components/PhysicalActivitySelector.jsx';
import WaterIntakeInput from '../components/WaterIntakeInput.jsx';
import SleepLogInput from '../components/SleepLogInput.jsx';
import NotesInput from '../components/NotesInput.jsx';

export default function LogActivity() {
  return (
    <div className="min-h-screen p-6 bg-[#F1F2EB] text-[#4A4A48]">
      <h1 className="text-3xl font-bold mb-6 text-[#566246]">Log Your Activity</h1>

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="w-full md:w-1/3">
            <div className="bg-[#D8DAD3] rounded-xl shadow-md p-6 h-full min-h-[200px] border border-[#566246]/30">
              <MoodSelector />
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="bg-[#D8DAD3] rounded-xl shadow-md p-6 h-full min-h-[200px] border border-[#566246]/30">
              <DailyActivitySelector />
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="bg-[#D8DAD3] rounded-xl shadow-md p-6 h-full min-h-[200px] border border-[#566246]/30">
              <PhysicalActivitySelector />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="w-full md:w-1/3">
            <div className="bg-[#A4C2A5] rounded-xl shadow-md p-6 h-full border border-[#566246]/30">
              <WaterIntakeInput />
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="bg-[#A4C2A5] rounded-xl shadow-md p-6 h-full border border-[#566246]/30">
              <SleepLogInput />
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="bg-[#A4C2A5] rounded-xl shadow-md p-6 h-full border border-[#566246]/30">
              <NotesInput />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
