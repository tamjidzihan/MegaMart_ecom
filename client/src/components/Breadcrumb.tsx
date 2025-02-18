import React, { Fragment } from "react";
import { ChevronRight } from "lucide-react";
interface BreadcrumbProps {
    items: {
        label: string;
        link?: string;
    }[];
}
export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            {items.map((item, index) => (
                <Fragment key={index}>
                    {index > 0 && <ChevronRight size={14} />}
                    {item.link ? (
                        <a href={item.link} className="hover:text-gray-700">
                            {item.label}
                        </a>
                    ) : (
                        <span className="text-gray-700">{item.label}</span>
                    )}
                </Fragment>
            ))}
        </div>
    );
};
