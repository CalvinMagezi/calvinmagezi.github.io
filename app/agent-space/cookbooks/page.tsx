'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Cookbook {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Automation' | 'Content' | 'Development' | 'Analysis' | 'Orchestration';
  pattern: string;
  ingredients: string[];
  steps: string[];
  examples: string[];
  pitfalls: string[];
  tags: string[];
  createdAt: string;
}

const INITIAL_COOKBOOKS: Cookbook[] = [
  {
    id: 'multi-agent-content-gen',
    title: 'Multi-Agent Content Generation',
    description: 'Orchestrate multiple AI agents to research, write, and optimize content simultaneously for maximum SEO impact.',
    difficulty: 'Intermediate',
    category: 'Content',
    pattern: 'Parallel execution with synthesis',
    ingredients: [
      'Research Agent (web search + analysis)',
      'Writer Agent (content generation)',
      'SEO Agent (keyword optimization)',
      'Editor Agent (quality control)',
      'Interconnection Agent (semantic linking)'
    ],
    steps: [
      '1. Research Agent gathers data on target topic',
      '2. Writer Agent generates 3-5 content variations',
      '3. SEO Agent optimizes each for keywords',
      '4. Editor Agent selects best version',
      '5. Interconnection Agent links to related content'
    ],
    examples: [
      'Daily blog post generation',
      'Product description creation',
      'Technical documentation'
    ],
    pitfalls: [
      'Agents producing contradictory information',
      'Over-optimization destroying readability',
      'Missing human review step'
    ],
    tags: ['content', 'SEO', 'parallel', 'orchestration'],
    createdAt: new Date().toISOString()
  },
  {
    id: 'strategic-delegation',
    title: 'Strategic Task Delegation',
    description: 'Break complex projects into agent-appropriate subtasks with clear handoffs and quality gates.',
    difficulty: 'Advanced',
    category: 'Orchestration',
    pattern: 'Sequential with checkpoints',
    ingredients: [
      'Planner Agent (task breakdown)',
      'Specialist Agents (domain experts)',
      'Quality Agent (validation)',
      'Integration Agent (combine outputs)'
    ],
    steps: [
      '1. Planner analyzes project and creates task tree',
      '2. Assign each subtask to specialist agent',
      '3. Quality Agent validates each completion',
      '4. Integration Agent combines results',
      '5. Human reviews final output'
    ],
    examples: [
      'Website development (design + code + content)',
      'Market research reports',
      'Software feature implementation'
    ],
    pitfalls: [
      'Task dependencies not mapped',
      'No rollback plan for failures',
      'Quality gates too loose'
    ],
    tags: ['orchestration', 'planning', 'quality', 'delegation'],
    createdAt: new Date().toISOString()
  }
];

export default function CookbooksPage() {
  const [cookbooks, setCookbooks] = useState<Cookbook[]>(INITIAL_COOKBOOKS);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const categories = ['all', 'Automation', 'Content', 'Development', 'Analysis', 'Orchestration'];
  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCookbooks = cookbooks.filter(cookbook => {
    const matchesCategory = selectedCategory === 'all' || cookbook.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || cookbook.difficulty === selectedDifficulty;
    return matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-600/20 border-green-500/30';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-600/20 border-yellow-500/30';
      case 'Advanced': return 'text-red-400 bg-red-600/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-600/20 border-gray-500/30';
    }
  };

  return (
    <div className="nexus-gradient-mesh min-h-screen text-white p-4 md:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 md:mb-12">
        <Link href="/agent-space" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Agent Space
        </Link>

        <div className="text-center mb-6 md:mb-8">
          <div className="text-5xl md:text-6xl mb-4">📚</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Agent Cookbooks
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-2">
            Reusable Patterns for AI Agent Orchestration
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Battle-tested recipes for building and orchestrating autonomous AI systems. 
            Each cookbook encodes proven strategies for complex agent coordination.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <label className="block text-sm text-gray-400 mb-2">Category</label>
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg transition-all nexus-pill text-sm ${
                    selectedCategory === cat
                      ? 'nexus-pill-active text-cyan-300'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm text-gray-400 mb-2">Difficulty</label>
            <div className="flex gap-2 flex-wrap">
              {difficulties.map(diff => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-4 py-2 rounded-lg transition-all nexus-pill text-sm ${
                    selectedDifficulty === diff
                      ? 'nexus-pill-active text-cyan-300'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
          <div className="nexus-card p-4">
            <div className="text-2xl md:text-3xl font-bold text-cyan-400">{cookbooks.length}</div>
            <div className="text-xs md:text-sm text-gray-400">Total Cookbooks</div>
          </div>
          <div className="nexus-card p-4">
            <div className="text-2xl md:text-3xl font-bold text-green-400">
              {cookbooks.filter(c => c.difficulty === 'Beginner').length}
            </div>
            <div className="text-xs md:text-sm text-gray-400">Beginner</div>
          </div>
          <div className="nexus-card p-4">
            <div className="text-2xl md:text-3xl font-bold text-yellow-400">
              {cookbooks.filter(c => c.difficulty === 'Intermediate').length}
            </div>
            <div className="text-xs md:text-sm text-gray-400">Intermediate</div>
          </div>
          <div className="nexus-card p-4">
            <div className="text-2xl md:text-3xl font-bold text-red-500">
              {cookbooks.filter(c => c.difficulty === 'Advanced').length}
            </div>
            <div className="text-xs md:text-sm text-gray-400">Advanced</div>
          </div>
        </div>
      </div>

      {/* Cookbooks Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCookbooks.map(cookbook => (
            <div key={cookbook.id} className="nexus-card p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {cookbook.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">
                    {cookbook.description}
                  </p>
                </div>
              </div>

              {/* Badges */}
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(cookbook.difficulty)}`}>
                  {cookbook.difficulty}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-600/20 text-cyan-300 border border-cyan-500/30">
                  {cookbook.category}
                </span>
              </div>

              {/* Pattern */}
              <div className="mb-4">
                <div className="text-xs text-gray-500 uppercase mb-1">Pattern</div>
                <div className="text-sm text-cyan-300 font-mono">{cookbook.pattern}</div>
              </div>

              {/* Ingredients */}
              <div className="mb-4">
                <div className="text-xs text-gray-500 uppercase mb-2">Ingredients</div>
                <div className="space-y-1">
                  {cookbook.ingredients.map((ingredient, idx) => (
                    <div key={idx} className="text-sm text-gray-300 flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {ingredient}
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps */}
              <div className="mb-4">
                <div className="text-xs text-gray-500 uppercase mb-2">Recipe</div>
                <div className="space-y-2">
                  {cookbook.steps.map((step, idx) => (
                    <div key={idx} className="text-sm text-gray-300">
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cookbook.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-red-600/10 text-red-300 rounded text-xs border border-red-500/20">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredCookbooks.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <p className="text-xl text-gray-400">No cookbooks match your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
