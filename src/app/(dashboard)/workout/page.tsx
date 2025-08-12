// workout/challenges/active/index.tsx
import ActiveChallengeDashboard from '@components/challenge/ActiveChallengeCard'

const ActiveChallengePage = () => {
  return <ActiveChallengeDashboard />
}

ActiveChallengePage.acl = {
  action: 'read',
  subject: 'active-challenge'
}

export default ActiveChallengePage
