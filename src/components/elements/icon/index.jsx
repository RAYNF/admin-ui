const IconWrapper = ({ children }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

const OverviewIcon = () => (
  <IconWrapper>
    <path
      d="M21 14H14V21H21V14Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14H3V21H10V14Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 3H14V10H21V3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 3H3V10H10V3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

const BalanceIcon = () => (
  <IconWrapper>
    <path
      d="M20 12V8H6C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 4.9 4.9 4 6 4H18V8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 6V18C4 19.1 4.9 20 6 20H20V16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 12C17.4696 12 16.9609 12.2107 16.5858 12.5858C16.2107 12.9609 16 13.4696 16 14C16 15.1 16.9 16 18 16H22V12H18Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

const TransactionIcon = () => (
  <IconWrapper>
    <path
      d="M17 11L21 7L17 3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 7H9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 21L3 17L7 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 17H3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

const BillIcon = () => (
  <IconWrapper>
    <path
      d="M7.50001 8.50007H10C10.2652 8.50007 10.5196 8.39471 10.7071 8.20718C10.8947 8.01964 11 7.76528 11 7.50007C11 7.23485 10.8947 6.9805 10.7071 6.79296C10.5196 6.60543 10.2652 6.50007 10 6.50007H9.00001V6.00007C9.00001 5.73485 8.89465 5.4805 8.70711 5.29296C8.51958 5.10543 8.26522 5.00007 8.00001 5.00007C7.73479 5.00007 7.48044 5.10543 7.2929 5.29296C7.10537 5.4805 7.00001 5.73485 7.00001 6.00007V6.55007C6.39243 6.67344 5.85237 7.01817 5.48466 7.51733C5.11696 8.01649 4.94785 8.63448 5.01015 9.25132C5.07246 9.86815 5.36174 10.4398 5.82184 10.8554C6.28194 11.2709 6.88003 11.5007 7.50001 11.5001H8.50001C8.63262 11.5001 8.75979 11.5527 8.85356 11.6465C8.94733 11.7403 9.00001 11.8675 9.00001 12.0001C9.00001 12.1327 8.94733 12.2599 8.85356 12.3536C8.75979 12.4474 8.63262 12.5001 8.50001 12.5001H6.00001C5.73479 12.5001 5.48044 12.6054 5.2929 12.793C5.10537 12.9805 5.00001 13.2349 5.00001 13.5001C5.00001 13.7653 5.10537 14.0196 5.2929 14.2072C5.48044 14.3947 5.73479 14.5001 6.00001 14.5001H7.00001V15.0001C7.00001 15.2653 7.10537 15.5196 7.2929 15.7072C7.48044 15.8947 7.73479 16.0001 8.00001 16.0001C8.26522 16.0001 8.51958 15.8947 8.70711 15.7072C8.89465 15.5196 9.00001 15.2653 9.00001 15.0001V14.4501C9.60758 14.3267 10.1476 13.982 10.5154 13.4828C10.8831 12.9836 11.0522 12.3657 10.9899 11.7488C10.9276 11.132 10.6383 10.5603 10.1782 10.1448C9.71807 9.72921 9.11998 9.49945 8.50001 9.50007H7.50001C7.3674 9.50007 7.24022 9.44739 7.14645 9.35362C7.05269 9.25985 7.00001 9.13268 7.00001 9.00007C7.00001 8.86746 7.05269 8.74028 7.14645 8.64651C7.24022 8.55275 7.3674 8.50007 7.50001 8.50007ZM19 10.0001H16V1.00007C16.0007 0.823858 15.9548 0.650592 15.867 0.497814C15.7792 0.345037 15.6526 0.218173 15.5 0.130068C15.348 0.0423001 15.1755 -0.00390625 15 -0.00390625C14.8245 -0.00390625 14.652 0.0423001 14.5 0.130068L11.5 1.85007L8.50001 0.130068C8.34799 0.0423001 8.17554 -0.00390625 8.00001 -0.00390625C7.82447 -0.00390625 7.65203 0.0423001 7.50001 0.130068L4.50001 1.85007L1.50001 0.130068C1.34799 0.0423001 1.17554 -0.00390625 1.00001 -0.00390625C0.824471 -0.00390625 0.652027 0.0423001 0.500008 0.130068C0.347404 0.218173 0.220789 0.345037 0.132986 0.497814C0.0451828 0.650592 -0.000691685 0.823858 7.88288e-06 1.00007V17.0001C7.88288e-06 17.7957 0.316078 18.5588 0.878688 19.1214C1.4413 19.684 2.20436 20.0001 3.00001 20.0001H17C17.7957 20.0001 18.5587 19.684 19.1213 19.1214C19.6839 18.5588 20 17.7957 20 17.0001V11.0001C20 10.7349 19.8947 10.4805 19.7071 10.293C19.5196 10.1054 19.2652 10.0001 19 10.0001ZM3.00001 18.0001C2.73479 18.0001 2.48044 17.8947 2.2929 17.7072C2.10536 17.5196 2.00001 17.2653 2.00001 17.0001V2.73007L4.00001 3.87007C4.15435 3.95068 4.32589 3.99278 4.50001 3.99278C4.67413 3.99278 4.84567 3.95068 5.00001 3.87007L8.00001 2.15007L11 3.87007C11.1543 3.95068 11.3259 3.99278 11.5 3.99278C11.6741 3.99278 11.8457 3.95068 12 3.87007L14 2.73007V17.0001C14.0027 17.3412 14.0636 17.6794 14.18 18.0001H3.00001ZM18 17.0001C18 17.2653 17.8947 17.5196 17.7071 17.7072C17.5196 17.8947 17.2652 18.0001 17 18.0001C16.7348 18.0001 16.4804 17.8947 16.2929 17.7072C16.1054 17.5196 16 17.2653 16 17.0001V12.0001H18V17.0001Z"
      fill="white"
      fillOpacity="0.7"
    />
  </IconWrapper>
);

const ExpensesIcon = () => (
  <IconWrapper>
    <path
      d="M14.5 15H20.5M20.5 15L18 17.5M20.5 15L18 12.5"
      stroke="currentColor"
      strokeOpacity="0.7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.5 11V3C20.5 2.60218 20.342 2.22064 20.0607 1.93934C19.7794 1.65804 19.3978 1.5 19 1.5H3C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V17C1.5 17.3978 1.65804 17.7794 1.93934 18.0607C2.22064 18.342 2.60218 18.5 3 18.5H13.235"
      stroke="currentColor"
      strokeOpacity="0.7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 5V15"
      stroke="currentColor"
      strokeOpacity="0.7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.5 6.5H7.75C7.28587 6.5 6.84075 6.68437 6.51256 7.01256C6.18437 7.34075 6 7.78587 6 8.25C6 8.71413 6.18437 9.15925 6.51256 9.48744C6.84075 9.81563 7.28587 10 7.75 10H10.25C10.7141 10 11.1592 10.1844 11.4874 10.5126C11.8156 10.8408 12 11.2859 12 11.75C12 12.2141 11.8156 12.6592 11.4874 12.9874C11.1592 13.3156 10.7141 13.5 10.25 13.5H6"
      stroke="currentColor"
      strokeOpacity="0.7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

const GoalsIcon = () => (
  <IconWrapper>
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeOpacity="0.7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 12H18"
      stroke="currentColor"
      strokeOpacity="0.7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 12H2"
      stroke="currentColor"
      strokeOpacity="0.7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 6V2"
      stroke="currentColor"
      strokeOpacity="0.7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 22V18"
      stroke="currentColor"
      strokeOpacity="0.7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

const SettingIcon = () => (
  <IconWrapper>
    <path
      d="M11.9999 14.3465C13.2959 14.3465 14.3465 13.2959 14.3465 11.9999C14.3465 10.7039 13.2959 9.65332 11.9999 9.65332C10.7039 9.65332 9.65332 10.7039 9.65332 11.9999C9.65332 13.2959 10.7039 14.3465 11.9999 14.3465Z"
      stroke="white"
      strokeOpacity="0.7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.0545 14.4545C17.9456 14.7013 17.9131 14.9751 17.9613 15.2405C18.0094 15.5059 18.1359 15.7508 18.3245 15.9436L18.3736 15.9927C18.5258 16.1447 18.6465 16.3252 18.7288 16.5238C18.8112 16.7225 18.8536 16.9354 18.8536 17.1505C18.8536 17.3655 18.8112 17.5784 18.7288 17.7771C18.6465 17.9757 18.5258 18.1562 18.3736 18.3082C18.2217 18.4603 18.0412 18.581 17.8425 18.6634C17.6439 18.7457 17.431 18.7881 17.2159 18.7881C17.0009 18.7881 16.7879 18.7457 16.5893 18.6634C16.3906 18.581 16.2102 18.4603 16.0582 18.3082L16.0091 18.2591C15.8163 18.0705 15.5714 17.9439 15.3059 17.8958C15.0405 17.8477 14.7668 17.8802 14.52 17.9891C14.278 18.0928 14.0716 18.265 13.9263 18.4845C13.7809 18.704 13.7029 18.9613 13.7018 19.2245V19.3636C13.7018 19.7976 13.5294 20.2138 13.2225 20.5207C12.9157 20.8276 12.4994 21 12.0655 21C11.6315 21 11.2152 20.8276 10.9084 20.5207C10.6015 20.2138 10.4291 19.7976 10.4291 19.3636V19.29C10.4228 19.0192 10.3351 18.7565 10.1775 18.5362C10.0199 18.3159 9.79969 18.1481 9.54545 18.0545C9.29868 17.9456 9.02493 17.9131 8.75952 17.9613C8.4941 18.0094 8.24919 18.1359 8.05636 18.3245L8.00727 18.3736C7.8553 18.5258 7.67483 18.6465 7.47617 18.7288C7.27752 18.8112 7.06459 18.8536 6.84955 18.8536C6.6345 18.8536 6.42157 18.8112 6.22292 18.7288C6.02426 18.6465 5.84379 18.5258 5.69182 18.3736C5.53967 18.2217 5.41898 18.0412 5.33663 17.8425C5.25428 17.6439 5.21189 17.431 5.21189 17.2159C5.21189 17.0009 5.25428 16.7879 5.33663 16.5893C5.41898 16.3906 5.53967 16.2102 5.69182 16.0582L5.74091 16.0091C5.92953 15.8163 6.05606 15.5714 6.10419 15.3059C6.15231 15.0405 6.11982 14.7668 6.01091 14.52C5.90719 14.278 5.73498 14.0716 5.51547 13.9263C5.29596 13.7809 5.03873 13.7029 4.77545 13.7018H4.63636C4.20237 13.7018 3.78616 13.5294 3.47928 13.2225C3.1724 12.9157 3 12.4994 3 12.0655C3 11.6315 3.1724 11.2152 3.47928 10.9084C3.78616 10.6015 4.20237 10.4291 4.63636 10.4291H4.71C4.98081 10.4228 5.24346 10.3351 5.46379 10.1775C5.68412 10.0199 5.85195 9.79969 5.94545 9.54545C6.05437 9.29868 6.08686 9.02493 6.03873 8.75952C5.99061 8.4941 5.86408 8.24919 5.67545 8.05636L5.62636 8.00727C5.47422 7.8553 5.35352 7.67483 5.27118 7.47617C5.18883 7.27752 5.14644 7.06459 5.14644 6.84955C5.14644 6.6345 5.18883 6.42157 5.27118 6.22292C5.35352 6.02426 5.47422 5.84379 5.62636 5.69182C5.77834 5.53967 5.95881 5.41898 6.15746 5.33663C6.35611 5.25428 6.56905 5.21189 6.78409 5.21189C6.99913 5.21189 7.21207 5.25428 7.41072 5.33663C7.60937 5.41898 7.78984 5.53967 7.94182 5.69182L7.99091 5.74091C8.18374 5.92953 8.42865 6.05606 8.69406 6.10419C8.95948 6.15231 9.23322 6.11982 9.48 6.01091H9.54545C9.78745 5.90719 9.99383 5.73498 10.1392 5.51547C10.2846 5.29596 10.3626 5.03873 10.3636 4.77545V4.63636C10.3636 4.20237 10.536 3.78616 10.8429 3.47928C11.1498 3.1724 11.566 3 12 3C12.434 3 12.8502 3.1724 13.1571 3.47928C13.464 3.78616 13.6364 4.20237 13.6364 4.63636V4.71C13.6374 4.97328 13.7154 5.23051 13.8608 5.45002C14.0062 5.66953 14.2126 5.84174 14.4545 5.94545C14.7013 6.05437 14.9751 6.08686 15.2405 6.03873C15.5059 5.99061 15.7508 5.86408 15.9436 5.67545L15.9927 5.62636C16.1447 5.47422 16.3252 5.35352 16.5238 5.27118C16.7225 5.18883 16.9354 5.14644 17.1505 5.14644C17.3655 5.14644 17.5784 5.18883 17.7771 5.27118C17.9757 5.35352 18.1562 5.47422 18.3082 5.62636C18.4603 5.77834 18.581 5.95881 18.6634 6.15746C18.7457 6.35611 18.7881 6.56905 18.7881 6.78409C18.7881 6.99913 18.7457 7.21207 18.6634 7.41072C18.581 7.60937 18.4603 7.78984 18.3082 7.94182L18.2591 7.99091C18.0705 8.18374 17.9439 8.42865 17.8958 8.69406C17.8477 8.95948 17.8802 9.23322 17.9891 9.48V9.54545C18.0928 9.78745 18.265 9.99383 18.4845 10.1392C18.704 10.2846 18.9613 10.3626 19.2245 10.3636H19.3636C19.7976 10.3636 20.2138 10.536 20.5207 10.8429C20.8276 11.1498 21 11.566 21 12C21 12.434 20.8276 12.8502 20.5207 13.1571C20.2138 13.464 19.7976 13.6364 19.3636 13.6364H19.29C19.0267 13.6374 18.7695 13.7154 18.55 13.8608C18.3305 14.0062 18.1583 14.2126 18.0545 14.4545V14.4545Z"
      stroke="white"
      strokeOpacity="0.7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

const KebabMenuIcon = () => (
  <IconWrapper>
    <circle cx="2" cy="2" r="2" fill="currentColor" />
    <circle cx="2" cy="10" r="2" fill="currentColor" />
    <circle cx="2" cy="18" r="2" fill="currentColor" />
  </IconWrapper>
);

const LogoutIcon = () => (
  <IconWrapper>
    <path
      d="M8.3335 14.1663L12.5002 9.99967L8.3335 5.83301"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 10H2.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

export const Icon = {
  Overview: OverviewIcon,
  Balance: BalanceIcon,
  Transaction: TransactionIcon,
  Bill: BillIcon,
  Expenses: ExpensesIcon,
  Goal: GoalsIcon,
  setting: SettingIcon,
  KebabMenu: KebabMenuIcon,
  Logout: LogoutIcon,
};