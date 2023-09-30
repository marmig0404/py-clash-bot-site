import React from "react";

const MarkdownCode = ({
  children,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  return (
    <code className="rounded-sm bg-accent p-[2px] text-white shadow-btn">
      {children}
    </code>
  );
};

export default MarkdownCode;
