
# Vignan Reddy Legal Journey

**Learn Law. Share Knowledge. Grow Together.**

Website: https://vignanreddylegaljourney.vercel.app/

An independent, student-led educational initiative providing free learning resources for students pursuing the 3-Year LL.B (3YDC) programme affiliated with Osmania University.

## Features

- Responsive website for desktop and mobile.
- Academic dashboard covering all three years and six semesters.
- Subject-wise learning resources.
- PDF resource downloads.
- Search and filtering by semester, subject and category.
- Admin login and secure resource upload dashboard.
- Multiple PDF uploads and folder selection.
- Daily Legal Word of the Day with six-hour rotation.
- Daily legal quizzes.
- Subject-wise practice tests.
- Visitor counter displaying live, total and daily visits.
- About Us, Contact Us, Privacy Policy, Terms and Disclaimer pages.
- SEO metadata and sitemap.

## Technology Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Supabase Authentication
- Supabase Database
- Supabase Storage
- Vercel
- GitHub

## Academic Coverage

The website is designed for the Osmania University 3-Year LL.B programme.

It includes academic year and semester navigation, with resources organised by subject.

## Run Locally

1. Install Node.js (LTS).
2. Clone this repository.
3. Open the project folder in a terminal.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Configure the required environment variables in `.env.local`:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_publishable_key
   ```

6. Start the development server:

   ```bash
   npm run dev
   ```

7. Open http://localhost:3000.

## Deployment

This project is deployed using Vercel and connected to GitHub.

Commits to the configured production branch trigger automatic deployments.

Configure the Supabase environment variables in Vercel before deployment.

## Supabase Configuration

Supabase is used for:

- Admin authentication.
- Study-resource database records.
- PDF file storage.
- Website visitor statistics.

Keep secret keys and service-role credentials private. Never expose them in frontend code or commit them to GitHub.

## Important Notice

Vignan Reddy Legal Journey is an independent educational initiative. It is not affiliated with, endorsed by or officially operated by Osmania University, any affiliated college or any government authority.

All resources are provided for educational purposes and are not a substitute for professional legal advice.

Users must respect copyright and applicable intellectual property laws when accessing or sharing materials.

## Contact

Email: vignanreddy.legal@gmail.com

## Licence

No open-source licence is currently specified for this repository. Unless a licence is added, the source code is not automatically granted permission for reuse or redistribution.
