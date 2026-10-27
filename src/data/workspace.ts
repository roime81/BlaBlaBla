export const navItems = ['Overview', 'Agents', 'Tasks', 'Knowledge', 'Settings'];

export const modeTabs = [
  { label: 'Chat' },
  { label: 'Work' },
  { label: 'Code' },
];

export const statusCards = [
  {
    eyebrow: 'AI runtime',
    title: 'Workspace health',
    metric: '94%',
    description: 'All agents are stable and responding within expected latency windows.',
    size: 'large',
  },
  {
    eyebrow: 'Execution',
    title: 'Tasks this week',
    metric: '18',
    description: '6 new, 9 in review, 3 completed this week.',
  },
  {
    eyebrow: 'Context',
    title: 'Memory usage',
    metric: '67%',
    description: 'Knowledge layer is healthy and indexing 2.3k references.',
  },
];

export const conversation = [
  {
    id: 'a1',
    role: 'assistant',
    content: 'Good morning. I’ve mapped the current workflow and queued the next action items for review.',
  },
  {
    id: 'u1',
    role: 'user',
    content: 'Summarize the current project state and identify the top blockers before we ship the next release.',
  },
  {
    id: 'a2',
    role: 'assistant',
    content: 'The workspace is stable, the design system is aligned, and the remaining work is primarily orchestration, automation, and verification.',
  },
];

export const tasks = [
  { id: 1, title: 'Review new agent configs', status: 'In review', statusClass: 'amber', owner: 'Platform team' },
  { id: 2, title: 'Ship shared memory layer', status: 'Ready', statusClass: 'green', owner: 'Core ML' },
  { id: 3, title: 'Validate deployment checklist', status: 'Queued', statusClass: 'blue', owner: 'Ops' },
];

export const workspaceMeta = {
  workflow: 'DeepSeek V4 Flash',
  owner: 'After_ • AI Flow Studio',
  currentTask: 'deepseek-v4-flash',
  model: 'DeepSeek V4 Flash',
};
