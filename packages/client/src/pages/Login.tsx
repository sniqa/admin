import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormInput } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CONSTANT, Ws } from "@admin/common";
import { Link } from "react-router-dom";

const USERNAME_ERROR_MESSAGE = CONSTANT.SETUP.USERNAME_ERROR_MESSAGE(
  CONSTANT.SETUP.USERNAME_MIN_CHARACTERS,
  CONSTANT.SETUP.USERNAME_MAX_CHARACTERS
);
const PASSWORD_ERROR_MESSAGE = CONSTANT.SETUP.PASSWORD_ERROR_MESSAGE(
  CONSTANT.SETUP.PASSWORD_MIN_CHARACTERS,
  CONSTANT.SETUP.PASSWORD_MAX_CHARACTERS
);

const formSchema = z.object({
  username: z
    .string()
    .min(CONSTANT.SETUP.USERNAME_MIN_CHARACTERS, {
      message: USERNAME_ERROR_MESSAGE,
    })
    .max(CONSTANT.SETUP.USERNAME_MAX_CHARACTERS, {
      message: USERNAME_ERROR_MESSAGE,
    }),
  password: z
    .string()
    .min(CONSTANT.SETUP.PASSWORD_MIN_CHARACTERS, {
      message: PASSWORD_ERROR_MESSAGE,
    })
    .max(CONSTANT.SETUP.PASSWORD_MAX_CHARACTERS, {
      message: PASSWORD_ERROR_MESSAGE,
    }),
});

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    Ws.socket.emit("login", values, (response) => {
      console.log(response);
    });
  };

  return (
    <div className="flex justify-center items-center h-full w-full">
      <Card className="p-2 flex gap-2 flex-col justify-center">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            {CONSTANT.LOGIN.LOGIN}
          </CardTitle>
        </CardHeader>

        <CardContent className="-mb-3">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-2 w-80"
            >
              <FormInput
                control={form.control}
                name="username"
                label={CONSTANT.SETUP.USERNAME}
              />
              <FormInput
                control={form.control}
                name="password"
                inputType="password"
                label={CONSTANT.SETUP.PASSWORD}
              />

              <Button type="submit" className="w-full mt-4">
                {CONSTANT.LOGIN.LOGIN}
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="w-full flex flex-col">
          <div className="w-full text-gray-400 border-b" />

          <div className="w-full flex justify-between px-1 mt-2">
            <Link to="/setup" className="text-center text-sm text-sky-600">
              {CONSTANT.LOGIN.FORGET_PASSWORD}
            </Link>

            <Link to="/setup" className="text-center text-sm text-sky-600">
              {CONSTANT.LOGIN.NOT_HAVE_ACCOUNT}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
