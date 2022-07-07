import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Checkbox,
} from "@material-tailwind/react";

const categories = require("../../api/categories.json");
const ProductsFilters = (props) => {
  const [open, setOpen] = useState(0),
    handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };

  const width = props.width ? props.width : "w-full",
    category = props.category ? props.category : categories[0];

  return (
    <div className={width + "  max-h-min p-3 rounded-md mt-5 mr-5"}>
      <Fragment>
        <Accordion open={open === 1} className={"outline-none"}>
          {category.subCategories ? (
            <>
              <AccordionHeader onClick={() => handleOpen(1)}>
                Categories
              </AccordionHeader>
              <AccordionBody>
                {category.subCategories.map((subCategory) => {
                  return (
                    <div key={subCategory.id}>
                      <Checkbox defaultChecked /> {subCategory.title}
                    </div>
                  );
                })}
              </AccordionBody>
            </>
          ) : (
            ""
          )}
        </Accordion>
      </Fragment>
    </div>
  );
};

export default ProductsFilters;
