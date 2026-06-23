"use client";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";

interface Props {

    beginner: string[];

    intermediate: string[];

    advanced: string[];
}

export default function InterviewTabs({
    beginner,
    intermediate,
    advanced,
}: Props) {

    return (

        <div className="rounded-3xl border bg-card p-6 shadow-lg">

            <h2 className="mb-6 text-2xl font-bold">

                Interview Questions

            </h2>

            <Tabs defaultValue="beginner">

                <TabsList>

                    <TabsTrigger value="beginner">

                        Beginner

                    </TabsTrigger>

                    <TabsTrigger value="intermediate">

                        Intermediate

                    </TabsTrigger>

                    <TabsTrigger value="advanced">

                        Advanced

                    </TabsTrigger>

                </TabsList>

                <TabsContent value="beginner">

                    <ul className="space-y-3">

                        {beginner.map(
                            (
                                question,
                                index
                            ) => (

                                <li
                                    key={index}
                                >

                                    • {question}

                                </li>

                            )
                        )}

                    </ul>

                </TabsContent>

                <TabsContent value="intermediate">

                    <ul className="space-y-3">

                        {intermediate.map(
                            (
                                question,
                                index
                            ) => (

                                <li
                                    key={index}
                                >

                                    • {question}

                                </li>

                            )
                        )}

                    </ul>

                </TabsContent>

                <TabsContent value="advanced">

                    <ul className="space-y-3">

                        {advanced.map(
                            (
                                question,
                                index
                            ) => (

                                <li
                                    key={index}
                                >

                                    • {question}

                                </li>

                            )
                        )}

                    </ul>

                </TabsContent>

            </Tabs>

        </div>

    );
}