import { Button } from '../components/ui';

export default function NotFound() {
  return (
    <section className="container-x pb-28 pt-40 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-[42px] font-extrabold md:text-[60px]">This page doesn’t exist</h1>
      <p className="mx-auto mt-5 max-w-md text-lg text-fg-2">The link may be old or mistyped. Try one of these instead.</p>
      <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
        <Button to="/">Go to home</Button>
        <Button to="/services" variant="ghost" arrow={false}>See services</Button>
      </div>
    </section>
  );
}
