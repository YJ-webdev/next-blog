import { formatDate } from "@/app/blog/utils";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


export default function CardCategory({
  title,
  summary,
  date,
}: {
  title: string;
  summary: string;
  date: string;
}) {
  return (
    <Card className="w-[350px] h-full shadow-lg">
      <CardHeader>
        <CardTitle className="tracking-wide leading-normal">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground tracking-normal leading-relaxed">{summary}</p>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-gray-500">{formatDate(date)}</p>
      </CardFooter>
    </Card>
  );
}