import { Badge } from "@/components/ui/badge";

export default function BadgeDemo() {
  return (
    <div className="flex gap-4">
      <Badge variant={"default"}>default</Badge>
      <Badge variant={"destructive"}>destructive</Badge>
      <Badge variant={"outline"} capitalize>outline</Badge>
      <Badge variant={"secondary"} capitalize>secondary</Badge>
      <Badge variant={"success"} capitalize>success</Badge>
    </div>
  );
}
