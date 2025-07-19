import MoodSelector from '../components/MoodSelector.jsx';
import DailyActivitySelector from '../components/DailyActivitySelector.jsx';
import PhysicalActivitySelector from '../components/PhysicalActivitySelector.jsx';
import WaterIntakeInput from '../components/WaterIntakeInput.jsx';
import SleepLogInput from '../components/SleepLogInput.jsx';
import NotesInput from '../components/NotesInput.jsx';

export default function LogActivity() {
  return (
     <div className="min-h-screen p-6 bg-gradient-to-b from-pink-400 to-orange-400">
      <h1 className="text-3xl font-bold mb-6">Log Your Activity</h1>
      
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-full md:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 h-full min-h-[200px]">
                <MoodSelector />
        </div>
        </div>
        <div className="w-full md:w-1/3">
        <div className="bg-white rounded-xl shadow-md p-6 h-full min-h-[200px]">
                <DailyActivitySelector />
        </div>
        </div>
        <div className="w-full md:w-1/3">
        <div className="bg-white rounded-xl shadow-md p-6 h-full min-h-[200px]">
                <PhysicalActivitySelector />
        </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6 mb-6">

            <div className="w-full md:w-1/3">
        <WaterIntakeInput />
            </div>
            <div className="w-full md:w-1/3">
        <SleepLogInput />
            </div>
            <div className="w-full md:w-1/3">
        <NotesInput />
            </div>
      </div> 
      </div>
      </div>
    </div>
  );
}
