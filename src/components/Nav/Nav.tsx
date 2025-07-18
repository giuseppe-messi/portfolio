import { useCursorMagnify } from "../../stores/useCursorMagnify";
import styles from "./Nav.module.css";

import { memo } from "react";
// import { navItems } from "./navItems";
// import { withCursorHoverFunctionality } from "src/helpers/withCursorHoverFunctionality";

// interface NavProps {
//   hasPassedHeader: boolean | null;
// }

const NAV_ITEMS = ["About", "Works", "Contact"];

export const Nav = memo(() =>
  // { hasPassedHeader }: NavProps
  {
    // const ListItemWithCursorHoverFunctionality = useMemo(
    //   () => withCursorHoverFunctionality(S.ListItem),
    //   []
    // );

    const { setMagnify } = useCursorMagnify();

    return (
      <nav className={styles.nav}>
        <div>GM</div>
        <ul>
          {NAV_ITEMS.map((i) => (
            <li
              onMouseEnter={() => setMagnify(true)}
              onMouseLeave={() => setMagnify(false)}
            >
              {i}
            </li>
          ))}
        </ul>
      </nav>
    );

    // return (
    //   <S.Nav hasPassedHeader={hasPassedHeader!}>
    //     <div>GM</div>
    //     <S.List>
    //       {navItems.map((item) => {
    //         const { name } = item;

    //         return (
    //           <ListItemWithCursorHoverFunctionality key={name}>
    //             {name}
    //           </ListItemWithCursorHoverFunctionality>
    //         );
    //       })}
    //     </S.List>
    //   </S.Nav>
    // );
  }
);
