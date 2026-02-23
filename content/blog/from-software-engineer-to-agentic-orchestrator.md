---
title: "From Software Engineer to Agentic Orchestrator"
date: "2026-02-23"
excerpt: "The day everything changed — how I left my laptop at home and ran a full software operation from my phone using Agent HQ, and why I believe 2026 is the last year we write code."
tags: ["technology", "ai", "career", "agent-hq"]
coverImage: "/images/blog/agent-hq-banner.png"
published: true
---

Today is the first day of a new chapter of my life entirely.

I'm writing this blog post to announce the very first day that everything changed.

Today I successfully managed to leave my laptop at home and completely function at 100% capacity on just my phone — using Discord and Obsidian. How this was possible is **Agent HQ**.

## What is Agent HQ?

Agent HQ is a side project I've been working on and recently open-sourced at [github.com/CalvinMagezi/agent-hq](https://github.com/CalvinMagezi/agent-hq).

It takes into consideration implementations such as openclaw and Anthropic's paper on writing a C compiler using Claude as an agent team, as well as a few videos and concepts I've picked up along the way — to produce a method that allows you to create a harness you can connect to different AI agents, be it Claude Code, Gemini CLI, or OpenCode, for your specific purposes.

At its core, Agent HQ is a **local-first AI orchestration system**. There is no cloud backend, no SaaS subscription, no third-party database. Everything lives on your machine, in an Obsidian vault — a folder of markdown files that acts as your agent's brain, memory, and task queue simultaneously.

## The Architecture

Understanding Agent HQ requires understanding three layers that work in concert.

### Layer 1 — The Vault (Your Agent's Brain)

The vault is a structured Obsidian directory that serves as the single source of truth for everything. It's organised into purpose-built folders:

- **`_jobs/`** — The job queue. Jobs move from `pending/` → `running/` → `done/` via atomic file renames. Two workers racing to claim the same job? Only one rename succeeds. No database transactions needed.
- **`_delegation/`** — Tasks that HQ creates for specialist bots. A job might spawn five parallel delegation tasks — one for Claude Code to write a component, one for Gemini to do research, one for OpenCode to review — all running concurrently.
- **`_system/`** — The agent's identity and memory. `SOUL.md` defines who the agent is. `MEMORY.md` is its persistent knowledge. `PREFERENCES.md` captures how you work. `HEARTBEAT.md` is an actionable to-do list that the system processes on a cron schedule.
- **`_threads/`** — Full conversation history, stored as markdown. Your agent never forgets a conversation.
- **`_logs/`** — Date-partitioned job execution logs.

Everything is plain text. You can open it in Obsidian, read it in any editor, version control it, back it up, and inspect it without a single API call.

### Layer 2 — The Worker Agent (HQ)

The HQ Agent is a polling worker running locally on your machine. It wakes up every five seconds, checks `_jobs/pending/`, claims a job via atomic rename, and executes it.

Execution happens through a tool system built on the Pi SDK:

- **BashTool** — runs shell commands on your machine
- **FileTool** — reads, writes, and manages files
- **LocalContextTool** — injects vault context (soul, memory, preferences) into every task
- **MCPBridgeTool** — connects to any MCP server for extended capabilities

The agent has a security model built in. Jobs can run at three permission levels: `MINIMAL` (read-only), `STANDARD` (read + write), and `ADMIN` (full access including network and process control). Every tool call is gated by a `ToolGuardian` that enforces the security profile set on the job.

### Layer 3 — The Discord Relay (Your Interface)

This is the layer that changed my life today.

The relay is a multi-bot Discord system. Each bot is a harness — a wrapper around a CLI tool:

- **Claude Code bot** — routes messages to `claude` CLI, with your full vault context injected
- **Gemini CLI bot** — routes to `gemini` CLI, specialised as a Google Workspace and research agent
- **OpenCode bot** — routes to `opencode` CLI for alternative coding tasks

You send a message to a Discord channel. The relay picks it up, enriches it with your pinned notes, memory, and recent context from the vault, passes it to the appropriate agent, streams the response back to Discord, and logs the conversation.

From your phone. From anywhere in the world. No laptop required.

## How a Job Actually Flows

Here's a concrete example of what happened today:

1. I sent a message to my Discord relay: *"Review the latest PR on the Kolaborate monorepo and summarise the changes"*
2. The relay created a job file in `_jobs/pending/` with that instruction
3. The HQ agent on my M4 MacBook Pro (running 24/7 at home) picked it up within five seconds
4. It executed using Claude Code + BashTool to run `gh pr view` and analyse the diff
5. The result was written back to the vault and relayed to me in Discord
6. Total time: under two minutes

I was on my phone. My laptop was at home. The work got done.

## The Multi-Machine Vision

Agent HQ is designed to scale beyond a single machine.

The vault is the coordination layer. Because it's just a filesystem, it can be synced across machines using any tool you already use — iCloud, Syncthing, Dropbox, a Git remote. Multiple worker agents on multiple machines can poll the same job queue, with atomic file renames ensuring no job is processed twice.

Imagine this setup:

- **M4 MacBook Pro at home** — running the primary HQ agent with admin-level tools and full codebase access
- **A cloud VM** — running a lightweight worker specialised in long-running research tasks
- **A Raspberry Pi** — running a minimal agent for home automation and local integrations

They all share the same vault. They all pick up jobs based on their capabilities. They all report back to you on Discord. One interface, infinite machines, infinite scale.

This is the direction Agent HQ is heading. The architecture already supports it. The job schema includes worker identity fields. The delegation system was designed for multi-agent coordination from day one. What's coming next is formalised worker discovery, capability matching, and load balancing across the fleet.

## What This Actually Costs

I am not a special developer. I do not have a crazy budget.

- **Claude Code Max Plan** — $100/month
- **Gemini subscription** — $20/month
- **OpenRouter credits** — ~$10/month

That's $130 a month — less than a Netflix subscription for a family of four — to run an entire AI agent army that works while I sleep, that executes code on my behalf, that never forgets a conversation, and that I can direct from my phone while sitting in a meeting, waiting for a taxi, or having lunch.

The infrastructure cost of building what I've built — even two years ago — would have been thousands of dollars a month in cloud compute, managed services, and engineering time. Today it runs on a laptop in my bedroom.

## The End of Software Development As We Know It

Software development has changed. Not gradually — suddenly, completely, and irreversibly.

We are not in a world where AI assists developers. We are in a world where developers direct AI. The skill set that matters is no longer syntax recall, framework memorisation, or typing speed. It's **systems thinking**, **task decomposition**, **context management**, and the ability to describe what you want with enough precision that an agent can execute it without hand-holding.

We no longer have software developers. We have **Agentic Orchestrators**.

I would like to be the first of many to officially announce the change in my role, my capabilities, and my career: from **Software Engineer** to **Agentic Orchestrator**.

The future is exciting. And I look forward to what other people are building in 2026 — the last year we write code.

---

*Agent HQ is open source under the MIT licence. You can explore the full codebase, deep wiki, and video walkthrough at [github.com/CalvinMagezi/agent-hq](https://github.com/CalvinMagezi/agent-hq).*
