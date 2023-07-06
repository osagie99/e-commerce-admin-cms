"use client"

import * as z from "zod";
import { Store } from '@prisma/client'
import { FC, useState } from 'react'
import Heading from "@/components/ui/Heading"
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { AlertModal } from "@/components/modals/alert-modal";

interface SettingsFormProps {
  initialData: Store;
}

const formSchema = z.object({
  name: z.string().min(1, {message: "Required"}),
});
type SettingsFormValues = z.infer<typeof formSchema>;

const SettingsForm: FC<SettingsFormProps> = ({initialData}) => {

  const params = useParams();
  const route = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
  })

  const onSubmit = async (data: SettingsFormValues) => {
    try {
      setLoading(true);
      await axios.patch(`/api/stores/${params.storeId}`, data);
      route.refresh();
      toast.success("Store updated.")
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const onDelete = async () => {
    try{
      setLoading(true);
      await axios.delete(`/api/stores/${params.storeId}`)
      route.refresh();
      route.push("/");
      toast.success("Store Deleted.");
    } catch(error) {
      toast.error("Make sure you removed all products and categories first.")
    } finally {
      setLoading(false);
    }
  }


  return (
    <>
    <AlertModal 
      isOpen={open}
      loading={loading}
      onConfirm={onDelete}
      onClose={() => setOpen(false)}
    />
      <div className="flex items-center justify-between">
        <Heading title="Settings" description="Manage store preferences" />
        <Button variant={"destructive"} size={"icon"} onClick={() => {setOpen(true)}} disabled={loading}>
          <Trash className="h-4 w-4" />
        </Button>
      </div>
      <Separator />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-3 gap-8">
            <FormField 
              control={form.control}
              name="name"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Store Name" {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="mt-3" type="submit">Save Changes</Button>

        </form>

      </Form>
    </>
  );
}

export default SettingsForm