"use client";

interface HoverLinksProps {
  text: string;
  cursor?: boolean;
}

const HoverLinks = ({ text, cursor }: HoverLinksProps) => {
  return (
    <span
      className="hover-link"
      data-cursor={cursor ? "disable" : undefined}
    >
      <span className="inline-block">{text}</span>
      <span className="inline-block absolute left-0 top-full">{text}</span>
    </span>
  );
};

export default HoverLinks;
