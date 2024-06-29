import { SignIn } from '@clerk/nextjs';

export default function SiginInPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center text-white">
  <div className="flex flex-col items-center">
    <div className="mb-4 text-center text-2xl">
      <p>Email: abc@gmail.com</p>
      <p>Password: abc123</p>
    </div>
    <SignIn />
  </div>
</main>
  );
}
