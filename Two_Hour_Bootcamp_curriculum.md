# Build a Mood Tracker AI App in 2 Hours
## Learn What a PRD Is + Build It in Lovable

Pre-scripted for 500+ students. No setup during class. 8th grade level.

---

## Before Class: Setup (Students Do This at Home)

**Required (5 minutes):**
- Install Lovable: Go to **lovable.dev** → Sign up with Google
- Install Claude Code: VS Code → Extensions → Install Claude Code
- Connect Claude Code: Enter your Claude API key

**That's it. No Supabase, no GitHub, no Vercel. Just Lovable + Claude.**

---

## What You'll Learn Today

✅ What a PRD (Product Requirements Document) is  
✅ How to use Claude to write a PRD  
✅ How to build from a PRD in Lovable  
✅ How to deploy your app (we'll do this together live)  

---

## Today's App: Mood Tracker

A simple app where users:
1. Pick their current mood (happy, sad, stressed, calm, etc.)
2. Write a few words about why
3. Get AI advice about their mood
4. See their mood history

**That's it. One simple, powerful app.**

---

# Phase 1: Understanding a PRD (15 Minutes)

## What is a PRD?

**PRD = Product Requirements Document**

A PRD is a document that describes:
- **What** you're building
- **Why** you're building it
- **Who** will use it
- **How** it should work

**Think of it like a blueprint for a house before the builders start.**

Before you build anything, you write down exactly what you're making.

---

## The PRD Template

Every PRD has these sections:

```
1. PRODUCT OVERVIEW
   - What is it? (1-2 sentences)

2. TARGET USERS
   - Who will use this?

3. PROBLEMS IT SOLVES
   - What pain point does it fix?

4. KEY FEATURES
   - What can users do?
   - What happens when they do it?

5. SUCCESS METRICS
   - How do we know it works?

6. USER FLOW
   - What's the step-by-step journey?

7. TECHNICAL NOTES
   - Any special instructions?
```

---

## Example: The Mood Tracker PRD (Fill This In Together)

**Let's write the PRD for our Mood Tracker app together.**

I'll show you each section, and you'll see how it comes together.

---

### Section 1: Product Overview

**What is the Mood Tracker?**

```
The Mood Tracker is an AI-powered app that lets users log their emotional state, 
understand what they're feeling, and get personalized advice to help manage their mood.
```

Simple. Clear. One paragraph.

---

### Section 2: Target Users

**Who uses this?**

```
- Students feeling stressed about school
- People managing mental health
- Anyone wanting to understand their emotions better
- Ages 13+
```

Just list them.

---

### Section 3: Problems It Solves

**What problem does this fix?**

```
1. People don't know how to describe what they're feeling
2. People don't have a place to track their mood patterns
3. People need AI advice on how to manage their emotions
```

List the problems.

---

### Section 4: Key Features

**What can users do?**

```
FEATURE 1: Pick a mood
- User sees mood options: Happy, Sad, Anxious, Calm, Stressed
- User clicks the mood that matches how they feel
- That mood gets selected (highlighted)

FEATURE 2: Explain why
- Text input appears: "Tell me more..."
- User types why they feel this way (example: "nervous about math test")
- They can skip this if they want

FEATURE 3: Get AI advice
- User clicks "Get Advice"
- Claude AI generates personalized response
- Example: "It's normal to feel nervous. Here's what you can do..."
- Response appears on screen

FEATURE 4: See history
- User can scroll down to see past moods
- Each one shows: mood + date/time + their note
```

Each feature has: What user sees, what they click, what happens.

---

### Section 5: Success Metrics

**How do we know it works?**

```
1. Users come back more than once (they use it regularly)
2. Users complete the flow (mood → explanation → advice)
3. Users find the advice helpful (they'd say so)
```

Simple metrics.

---

### Section 6: User Flow

**Step by step, what happens?**

```
Step 1: User opens the app
Step 2: User sees a title: "How Are You Feeling?"
Step 3: User sees 5 mood options (happy, sad, anxious, calm, stressed)
Step 4: User clicks one mood
Step 5: Text input appears: "Tell me more about why..."
Step 6: User types or leaves blank
Step 7: User clicks "Get Advice"
Step 8: Claude AI generates advice (they wait 2-3 seconds)
Step 9: Advice appears on screen
Step 10: Below advice, user sees past moods (if any)
Step 11: User can click another mood to start over
```

Step by step.

---

### Section 7: Technical Notes

**Any special instructions?**

```
- Use Claude API to generate advice
- Save mood entries to browser storage (no database needed)
- Show a loading spinner while Claude generates advice
- Make it beautiful with emojis for each mood
- Mobile-responsive (works on phone)
```

That's the PRD.

---

# Phase 2: Claude Creates Your PRD (20 Minutes)

## Now It's Your Turn

**In Claude Code, paste this prompt:**

```
I want to build a Mood Tracker AI app.

Here's what it should do:
- Users pick their mood from options: Happy, Sad, Anxious, Calm, Stressed
- Users can write a note about why they feel that way
- Claude AI gives them personalized advice
- They see a history of past moods below

My business: I'm teaching students about building AI apps.
My target users: Students aged 13+ learning about mood and mental health.

Using the PRD template I showed you, write a complete PRD for this Mood Tracker app.

The PRD should have these sections:
1. Product Overview
2. Target Users
3. Problems It Solves
4. Key Features (detailed)
5. Success Metrics
6. User Flow (step by step)
7. Technical Notes

Make it clear enough that someone could build it perfectly from this PRD.
```

**Claude writes the complete PRD.**

---

## Review the PRD (5 Minutes)

Read Claude's PRD.

**Ask yourself:**
- Is it clear what I'm building? ✅
- Could someone build this from this PRD? ✅
- Does it match what I want? ✅

**If something's wrong:**
- Ask Claude: "Can you change [section] to..."
- Claude updates it

**When it looks good:**
- Copy the entire PRD
- Save it in a text file (you'll need it next)

---

# Phase 3: Build in Lovable Using the PRD (80 Minutes)

## Step 1: Open Lovable (2 Minutes)

1. Go to **lovable.dev**
2. Click **New Project**
3. Name it: `mood-tracker`
4. Click **Create**

---

## Step 2: Create the Lovable Prompt (5 Minutes)

**Still in Claude Code, paste this:**

```
I just wrote a PRD for a Mood Tracker app.

Here's my complete PRD:
[PASTE YOUR ENTIRE PRD HERE]

Now create a detailed prompt for Lovable that will build this app.

The prompt should:
1. Tell Lovable exactly what to build
2. Describe the user interface (what's on screen)
3. Describe the colors and styling (make it beautiful)
4. Explain what happens when users click things
5. Include how to integrate with Claude API
6. Make it mobile-responsive
7. Include emojis for each mood

Make the prompt detailed so Lovable can build it perfectly in one go.
```

**Claude creates a custom Lovable prompt.**

---

## Step 3: Paste Into Lovable and Build (65 Minutes)

**In Lovable:**

1. Click the **chat icon** (bottom right)
2. In Claude Code, **copy the entire Lovable prompt Claude just created**
3. **Paste it into Lovable's chat**
4. Watch Lovable build your app in real-time

**What happens:**
- Lovable reads the prompt
- Code appears on the left
- Your app appears on the right (live preview)
- Lovable builds the Mood Tracker
- Takes about 40-50 minutes

---

## Step 4: While Lovable Builds (During the 40-50 Minutes)

**You can:**

1. **Watch the preview** as it builds
2. **Ask Lovable questions** in the chat:
   ```
   Why did you choose that color?
   How does the mood selection work?
   How does Claude API integration work?
   ```
3. **Ask for improvements:**
   ```
   Make the button bigger
   Change the colors to be more calming
   Add more emoji options
   ```
4. **Lovable updates in real-time** (you see changes instantly)

---

## Step 5: Test Your App (10 Minutes)

**Click Preview** (top right in Lovable).

Your Mood Tracker opens in a test window.

**Test it like a user:**
1. Pick a mood (happy, sad, anxious, calm, stressed)
2. Write a note about why
3. Click "Get Advice"
4. Wait for Claude to generate advice
5. See the advice appear
6. Scroll down to see mood history

**Does everything work?**
- ✅ Mood selection works
- ✅ Text input works
- ✅ Claude generates advice
- ✅ History appears
- ✅ Looks beautiful

**If something's not perfect:**
- Ask Lovable in chat: "Fix [the issue]"
- Lovable updates instantly

---

## Step 6: Polish and Perfect (5 Minutes)

Ask Lovable to make improvements:

```
Make [section] look more beautiful
Change [color] to something more calming
Add [small feature] to make it better
```

**Examples:**
```
Make the mood buttons bigger with bigger emojis
Change the background to a soft blue gradient
Add a nice animation when advice appears
Make the text bigger and easier to read
```

Lovable makes each change in seconds.

---

# Phase 4: Deploy Your App (8 Minutes)

## Step 1: Export Your App (3 Minutes)

**In Lovable:**
1. Click **Deploy** (top right)
2. Choose **Vercel** (easiest)
3. Click **Deploy**

---

## Step 2: Wait for Deployment (5 Minutes)

Lovable connects to Vercel and deploys your app.

You'll get a **live URL** that looks like:
```
https://mood-tracker-abc123.vercel.app
```

---

## Step 3: Share Your App (2 Minutes)

**You now have a live app on the internet!**

Everyone in class:
- Gets their own Mood Tracker URL
- Can share it with friends
- People can use it right now
- It's real, it's live, it's yours

---

# Phase 5: Celebrate + Debrief (2 Minutes)

## What You Just Did

You:
1. ✅ Learned what a PRD is
2. ✅ Used Claude to write a PRD
3. ✅ Built an app from that PRD in Lovable
4. ✅ Deployed it to the internet
5. ✅ Got a live URL

**All in 2 hours. All without coding.**

---

## The Real Lesson

**The key insight:**

Before you build anything, you write down what you're building (the PRD).

When the PRD is clear, building is easy.

This is how real companies work:
1. Product manager writes PRD
2. Designer reads PRD
3. Developer reads PRD
4. Everyone builds the same thing

You just did all three jobs using Claude + Lovable.

---

# Key Takeaways

✅ **PRD = Blueprint before building**  
✅ **Claude can write PRDs for you**  
✅ **Lovable can build from a PRD**  
✅ **You can build real apps without code**  
✅ **The key is clear thinking (PRD), not coding skills**  

---

# Next Steps (After Today)

### If You Want to Improve Your Mood Tracker:
1. Ask Lovable: "Can you add [feature]?"
2. Lovable adds it instantly
3. Test it
4. Share the new version

### If You Want to Build Something Different:
1. Ask Claude: "Write a PRD for [your idea]"
2. Claude writes the PRD
3. Create a Lovable prompt from the PRD
4. Build it in Lovable
5. Deploy to Vercel

### Same process. Works for anything.

---

# Important Reminders

**Remember:**
- The PRD is your blueprint
- The PRD should be clear before you start building
- Lovable reads the PRD and builds from it
- If the PRD is unclear, the app will be unclear

**This skill — writing clear PRDs — is worth thousands of dollars.**

Product managers at big companies make $150K+ for writing PRDs.

You just learned how to do it in 2 hours.

---

# Questions?

**In Lovable chat, ask:**
```
Why did you build it this way?
How does this feature work?
Can you change [something]?
```

Lovable explains everything and makes changes instantly.

---

# You Did It

You went from learning what a PRD is to building a live AI app in 2 hours.

You learned the thinking skill (PRD) that matters more than coding.

You can now build anything you imagine using this same process.

That's powerful. 🚀

---

# Share Your App

Post your live Mood Tracker URL:
- On Twitter: "I built a Mood Tracker AI app in 2 hours 🚀"
- With your friends
- With your teacher
- With your family

**Show them your app is real. It's live. It works.**

That's not a learning exercise anymore. That's a product.

Good luck! 💪
