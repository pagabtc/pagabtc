# PagaBTC Frontend

This is the frontend application for PagaBTC, a Bitcoin payment gateway built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Custom UI components
- **QR Codes**: qrcode.react
- **Real-time**: socket.io-client

## Getting Started

### Prerequisites

- Node.js (v16 or higher)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will start on http://localhost:3000

## Project Structure

```
src/
├── app/                 # App router pages
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── pay/[id]/page.tsx # Payment page
├── components/         # Reusable components
├── lib/                # Utility functions
└── styles/             # Global styles
```

## Features

- Responsive design for mobile and desktop
- Dark mode support
- Payment request pages with QR codes
- Real-time payment status updates
- Copy to clipboard functionality

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Development

### Adding New Pages

1. Create a new folder in `src/app/` for the route
2. Add a `page.tsx` file with the page content
3. Use Tailwind CSS classes for styling

### Creating Components

1. Create a new file in `src/components/`
2. Export the component as a named export
3. Import and use in pages as needed

## Building for Production

```bash
npm run build
```

This will create an optimized production build in the `.next` directory.

## Deployment

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com), the creators of Next.js:

1. Push your code to a Git repository
2. Create a new project on Vercel
3. Connect your Git repository
4. Deploy!

## License

This project is licensed under the MIT License.