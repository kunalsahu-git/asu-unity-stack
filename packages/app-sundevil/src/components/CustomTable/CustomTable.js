import React from "react";
import PropTypes from "prop-types";
import "./customStyle.css";

export const CustomTable = ({
  title,
  tablesData,
  footerText,
  tableHeaderData,
  description,
}) => {
  return (
    <section className="custom-table">
      <div className="container">
        <h2 className="mt-1 mb-3">{title}</h2>
        {description && (
          <div
            className="mb-6"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        <div className="section-table">
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "left",
            }}
          >
            <thead>
              <tr className="pb-1">
                {tableHeaderData.map(heading => (
                  <th className="table-heading">{heading.tableTitle}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tablesData.map((row, index) => (
                <tr className={row.textColor} key={index}>
                  <td className="text-white py-1">{index + 1}</td>
                  {Object.values(row.tableText).map((cell, i) => (
                    <td className="py-1">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className="text-gold mt-1"
          dangerouslySetInnerHTML={{ __html: footerText }}
        />
      </div>
    </section>
  );
};

CustomTable.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  footerText: PropTypes.string,
  tablesData: PropTypes.arrayOf(PropTypes.object),
  tableHeaderData: PropTypes.arrayOf(
    PropTypes.shape({
      tableTitle: PropTypes.string,
    })
  ),
};

export default CustomTable;
