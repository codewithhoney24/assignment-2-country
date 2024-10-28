import Link from "next/link";
import Country from "@/app/components/Country";
import "@/app/globals.css";

export default function CountryName({ params }: { params: { country_name: string } }) {
  const countries = [
    { name: "Pakistan", population: 241, capital: "Islamabad" },
    { name: "India", population: 1393, capital: "New Delhi" },
    { name: "Germany", population: 83, capital: "Berlin" },
    { name: "Australia", population: 25, capital: "Canberra" },
    { name: "Japan", population: 125, capital: "Tokyo" },
  ];

  function findCountry(name: string) {
    return countries.find((country) => name.toLowerCase() === country.name.toLowerCase());
  }

  const result = findCountry(params.country_name);

  return (
    <div>
      <Country countryInfo={result} url={params.country_name} />
      <div>
        <Link href="/">Back to Home</Link>
      </div>
    </div>
  );
}
