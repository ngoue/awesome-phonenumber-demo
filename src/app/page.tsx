"use client";

import { getExample, parsePhoneNumber } from "awesome-phonenumber";
import { ReactNode, useState } from "react";

const Code = ({ children }: { children: ReactNode }) => (
  <span className="font-mono bg-purple-100 text-purple-700 p-1 rounded-md leading-relaxed">
    {children}
  </span>
);

const GetExample = ({ regionCode }: { regionCode: string }) => {
  const example = getExample(regionCode);

  return (
    <pre className="inline-block font-mono bg-slate-100 p-4 rounded-md">
      {`// getExample("${regionCode.toUpperCase()}")`}
      <br />
      <br />
      {JSON.stringify(getExample(regionCode), null, 2)}
      <br />
      <br />
    </pre>
  );
};

export default function Home() {
  const [phone, setPhone] = useState("");
  const parsedPhone = parsePhoneNumber(
    phone,
    phone.startsWith("+") ? undefined : { regionCode: "US" }
  );

  return (
    <main className="p-4 flex flex-col gap-y-20">
      <div className="spacey-y-3">
        <h1 className="text-4xl">
          <Code>awesome-phonenumber</Code> Demo
        </h1>
        <p className="max-w-xl">
          Here are some examples that utilize the{" "}
          <Code>awesome-phonenumber</Code> library.
        </p>
      </div>
      <div className="space-y-3">
        <h2 className="text-3xl">
          <Code>parsePhoneNumber</Code>
        </h2>
        <p className="max-w-xl">
          <Code>parsePhoneNumber</Code> gets information about a phone number.
          Try typing in the text field below to see what data is returned. The
          input assumes a US phone number by default, but try typing
          &quot;+&quot; with a country code to see examples from other
          countries!
        </p>
        <input
          type="text"
          name="phone"
          className="p-2 border border-black rounded-md"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div>
          <pre className="inline-block font-mono bg-slate-100 p-4 rounded-md">
            {JSON.stringify(parsedPhone, null, 2)}
          </pre>
        </div>
      </div>
      <div className="space-y-3">
        <h2 className="text-3xl">
          <Code>getExample</Code>
        </h2>
        <p className="max-w-xl">
          <Code>getExample</Code> displays a formatted example phone number for
          a certain country.
        </p>
        <div className="space-x-2 space-y-2">
          {["US", "CA", "GB", "JP"].map((region) => (
            <GetExample key={region} regionCode={region} />
          ))}
        </div>
      </div>
    </main>
  );
}
