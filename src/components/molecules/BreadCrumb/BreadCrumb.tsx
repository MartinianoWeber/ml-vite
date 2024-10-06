import React from "react";
interface BreadcrumbProps {
  categories: string[];
}

export default function BreadCrumb({ categories }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {categories.map((category, index) => (
          <li key={index} className="breadcrumb__item">
            {index < categories.length - 1 ? (
              <a href="#">{category}</a>
            ) : (
              <span>{category}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
