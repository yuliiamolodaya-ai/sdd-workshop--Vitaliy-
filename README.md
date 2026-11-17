# Liatoshynsky Foundation Demo (template for the Spec-Driven BA Workshop)

> This is a **template repository** for the course [spec-driven-ba-workshop](https://github.com/VovaD199/spec-driven-ba-workshop). Click **Use this template → Create a new repository**, then follow Day 1 of the course instead of the steps below. The clone/run steps below stay as a reference.

This repository is a simplified training copy of the Liatoshynsky Foundation client application.

It is prepared for training sessions, so it does not require a real MongoDB database or external services. When the app starts, it automatically creates an in-memory MongoDB database and fills it with demo data.

Original project repository: https://github.com/Liatoshynsky-Foundation/lf-client

## What You Need

Install these tools before starting:

- [Git](https://git-scm.com/)
- [Node.js 22](https://nodejs.org/en/download/current)
- npm, which is installed together with Node.js

## Clone The Project

Open a terminal and go to the folder where you keep projects.

For example:

```bash
cd ~/Projects
```

Clone this training repository:

```bash
git clone https://github.com/<your-login>/sdd-workshop-<your-name>.git
```

Go into the project folder:

```bash
cd sdd-workshop-<your-name>
```

If you use SSH for GitHub, clone with this command instead:

```bash
git clone git@github.com:<your-login>/sdd-workshop-<your-name>.git
```

## Install The Project

Install dependencies:

```bash
npm install
```

This can take a few minutes.

## Environment File

The demo app has only one optional environment variable.

Create a local environment file by copying the example file:

```bash
cp .env.example .env
```

The default value is enough for the demo:

```bash
MONGO_MEMORY_DB_NAME=lf-demo
```

## Run The Project

Start the application:

```bash
npm run dev
```

After the terminal says the app is ready, open this address in a browser:

```text
http://localhost:3000
```

The app starts an in-memory MongoDB database automatically. Demo data is added on every start, and the database stops when the app stops.

## Stop The Project

Go back to the terminal where the app is running and press:

```text
Ctrl + C
```

## Start Again Later

When you want to run the app again:

```bash
cd ~/Projects/sdd-workshop-<your-name>
npm run dev
```

Use the actual folder path where you cloned the project if it is different.

## Demo Images

Some training content uses mock images from the `public` folder.

Put demo images here:

```text
public/images/demo
```

If an image is missing, the app uses a transparent placeholder so the page can still load.

## Common Problems

If `npm install` fails, check that Node.js 22 is installed:

```bash
node -v
```

If `http://localhost:3000` does not open, check the terminal for the actual address. If port `3000` is busy, Next.js may offer another port.

If the page looks empty after changes, stop the app with `Ctrl + C` and start it again:

```bash
npm run dev
```
