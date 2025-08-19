import WorkoutHeader from '@components/workout/WorkoutHeader';
import WorkoutDaysAccordion from '@components/workout/WorkoutDaysAccordion';

export default function WorkoutDetailsPage() {
  // Mock data (replace with API later)
  const challenge = {
    title: '30-Day Push-Up Challenge',
    progress: 40,
    days: [
      { day: 'Day 1', exercises: [{ name: 'Push-Ups', reps: '20 reps' }, { name: 'Plank', reps: '30 sec' }] },
      { day: 'Day 2', exercises: [{ name: 'Push-Ups', reps: '25 reps' }, { name: 'Plank', reps: '40 sec' }] },
      { day: 'Day 3', exercises: [{ name: 'Push-Ups', reps: '30 reps' }, { name: 'Plank', reps: '45 sec' }] },
    ]
  };

  return (
    <div className="space-y-4">
      <WorkoutHeader title={challenge.title} progress={challenge.progress} />
      <WorkoutDaysAccordion days={challenge.days} />
    </div>
  );
}
