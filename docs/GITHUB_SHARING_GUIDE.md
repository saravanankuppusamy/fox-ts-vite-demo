# GitHub Sharing Guide

## Create a new repository locally

From the project folder:

```bash
git init
git add .
git commit -m "Add TypeScript NPM Vite instructor kit"
```

## Create an empty GitHub repository

In GitHub, create a new repository without adding a README, license, or `.gitignore` because those files already exist locally.

## Connect and push

Replace the placeholders with your GitHub account and repository name:

```bash
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
git push -u origin main
```

## Suggested repository description

> Classroom-ready TypeScript, NPM, ES modules, and Vite demos for non-developers serving as technical leads.

## Recommended release process

1. Verify `npm install` from a clean folder.
2. Run `npm run typecheck`.
3. Run `npm run build`.
4. Tag the classroom version:

```bash
git tag -a v1.0.0 -m "Initial classroom release"
git push origin v1.0.0
```

5. Upload the ZIP file to the GitHub Release when a downloadable classroom bundle is helpful.
