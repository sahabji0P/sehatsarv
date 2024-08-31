import Link from "next/link"
export default function Component() {
    return (

<div className="flex min-h-[100dvh] flex-col">
      <header className="sticky top-0 z-50 bg-background px-4 py-3 shadow-sm md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center" prefetch={false}>
            <HospitalIcon className="h-8 w-8" />
            <span className="ml-2 text-lg font-semibold">SehatServ</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Link
              href="#"
              className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Login
            </Link>
            <Link
              href="#"
              className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              prefetch={false}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">

        <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
          <img src="/hospital.png" alt="Hospital Building" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-primary-foreground">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Welcome to ABC Hospital</h1>
              <p className="mt-3 text-lg sm:mt-5 sm:text-xl lg:text-2xl">
                Providing exceptional healthcare to our community.
              </p>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container  mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About ABC Hospital</h2>
                <p className="mt-4 text-muted-foreground">
                  ABC Hospital has been serving our community for over 50 years. Our mission is to provide
                  high-quality, compassionate healthcare to all who need it. With a team of experienced medical
                  professionals and state-of-the-art facilities, we are committed to delivering the best possible care.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/HospitalInterior.png"
                  alt="Hospital Interior"
                  width={400}
                  height={300}
                  className="rounded-lg"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Emergency Care</h3>
                <p className="mt-2 text-muted-foreground">
                  Our emergency department is open 24/7 to provide immediate care for any medical emergency.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Outpatient Clinics</h3>
                <p className="mt-2 text-muted-foreground">
                  We offer a wide range of outpatient clinics for specialized care, including cardiology, orthopedics,
                  and more.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Surgical Services</h3>
                <p className="mt-2 text-muted-foreground">
                  Our skilled surgeons perform a variety of procedures using advanced techniques and equipment.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Maternity Care</h3>
                <p className="mt-2 text-muted-foreground">
                  Expectant mothers can count on our experienced team of obstetricians and nurses for comprehensive
                  care.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Rehabilitation</h3>
                <p className="mt-2 text-muted-foreground">
                  Our physical, occupational, and speech therapists help patients regain their independence and improve
                  their quality of life.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Imaging Services</h3>
                <p className="mt-2 text-muted-foreground">
                  We offer a full range of imaging services, including X-ray, CT, MRI, and ultrasound, to support
                  accurate diagnoses.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="py-12 md:py-16 lg:py-20">
          <div className="container  mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Departments</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Emergency</h3>
                <p className="mt-2 text-muted-foreground">
                  Our emergency department is equipped to handle any medical emergency, 24 hours a day, 7 days a week.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Cardiology</h3>
                <p className="mt-2 text-muted-foreground">
                  Our team of cardiologists provides comprehensive care for heart-related conditions and diseases.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Oncology</h3>
                <p className="mt-2 text-muted-foreground">
                  Our oncology department offers advanced cancer treatment and support services for patients and their
                  families.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Orthopedics</h3>
                <p className="mt-2 text-muted-foreground">
                  Our orthopedic specialists provide comprehensive care for injuries and conditions affecting the
                  musculoskeletal system.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Pediatrics</h3>
                <p className="mt-2 text-muted-foreground">
                  Our pediatric department offers specialized care for children, from routine check-ups to complex
                  medical conditions.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Women's Health</h3>
                <p className="mt-2 text-muted-foreground">
                  Our women's health department provides comprehensive care for all stages of a woman's life, from
                  adolescence to menopause.
                </p>
              </div>
            </div>
          </div>
        </section>
        
      </main>
      <footer className="bg-muted py-6 text-sm">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-4">
            <Link href="#" className="flex items-center" prefetch={false}>
              <HospitalIcon className="h-6 w-6" />
              <span className="ml-2 font-semibold">ABC Hospital</span>
            </Link>
            <nav className="flex space-x-4">
              <Link href="#" className="hover:underline" prefetch={false}>
                About
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Services
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Departments
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Facebook
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Twitter
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Instagram
            </Link>
          </div>
          <p className="text-muted-foreground">&copy; 2024 SehatServ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}


function HospitalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 6v4" />
      <path d="M14 14h-4" />
      <path d="M14 18h-4" />
      <path d="M14 8h-4" />
      <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
      <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
    </svg>
  )
}


