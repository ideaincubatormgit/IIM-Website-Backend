|   DATE    | ACTION                                              |                     REMARKS |
| :-------: | :-------------------------------------------------- | :-------------------------- |
| 27-Feb-24 | - Basic project setup                               |                             |
| 27-Feb-24 | - The Entry point of the application `app.ts` setup | Basic imports performed, the mongoose connection established see `.env.example` have provided my mongodb_uri (PS: is not best practice ik), just get your own if picky |

|27-Feb-24| - Routing Files boilerplated. |The routes are being used from someplace else in the `app.ts`, (`app.use("path", ...)`), In the `./routes` directory we define it. Have defined 2 routers `adminRouter` @ `./routes/adminRoutes` and `userRouter` @ `./routes/userRoutes`. Why? Dunno might need some admin specific logic, lets let it be there for some time.|
