"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { AlertTriangleIcon, ChevronDownIcon, StepBack } from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import useLink from "@/hooks/utils/useLink";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Step from "@/components/shop/order/Step";
import { Toaster } from "@/components/ui/toaster";
import TimeWatch from "@/components/ui/TimeWatch";
import HousekeepingBook from "@/components/housekeepingBook/HousekeepingBook";
import AnimatedDoughnutChart from "@/components/animatedDoughnutChart/animatedDoughnutChart";
import { AnimatedVerticalChart } from "@/components/animatedVerticalChart/animatedVerticalChart";

export default function Home() {
  const [num, setNum] = React.useState(0);
  const { changeQuery } = useLink();

  return (
    <main className="flex flex-col justify-center items-center gap-10">
      <Button size={"lg"} variant={"default"} onClick={() => setNum(num + 1)}>
        {num}
      </Button>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                Components
                <ChevronDownIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem
                  onClick={() => changeQuery({ page: "documentation" })}
                >
                  Documentation
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => changeQuery({ page: "Themes" })}
                >
                  Themes
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => changeQuery({ page: "GitHub" })}
                >
                  GitHub
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertTriangleIcon size={50} />
            <AlertDialogTitle>게시물을 삭제하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>
              한번 삭제된 게시물은 복구할 수 없어요.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction>확인</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Step />
      <Toaster />

      <TimeWatch />
      <HousekeepingBook />

      <AnimatedDoughnutChart />
      <AnimatedVerticalChart />
    </main>
  );
}
