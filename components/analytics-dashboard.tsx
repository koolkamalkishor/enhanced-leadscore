
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, BarChart, HeatMap } from "@/components/charts"
import { LeadTable } from "@/components/lead-table"

export function AnalyticsDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Conversion Rates</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart 
            data={[
              { date: "2024-01", rate: 0.45 },
              { date: "2024-02", rate: 0.52 },
              { date: "2024-03", rate: 0.61 },
            ]} 
          />
        </CardContent>
      </Card>

      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Top Lead Scoring</CardTitle>
        </CardHeader>
        <CardContent>
          <LeadTable />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Lead Activity Heatmap</CardTitle>
        </CardHeader>
        <CardContent>
          <HeatMap data={[]} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bottleneck Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart 
            data={[
              { stage: "Awareness", conversion: 100, dropoff: 0, insight: "Initial reach" },
              { stage: "Interest", conversion: 75, dropoff: 25, insight: "Content engagement needed" },
              { stage: "Consideration", conversion: 50, dropoff: 25, insight: "Value proposition unclear" },
              { stage: "Intent", conversion: 35, dropoff: 15, insight: "Price sensitivity" },
              { stage: "Evaluation", conversion: 25, dropoff: 10, insight: "Competitor comparison" },
              { stage: "Purchase", conversion: 15, dropoff: 10, insight: "Final objections" },
            ]}
          />
          <div className="mt-4 space-y-2 text-sm">
            <p className="font-medium">Key Bottlenecks:</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"/>
                <span>Interest (-25%): Enhance content engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full"/>
                <span>Consideration (-25%): Clarify value prop</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Lead Score Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart 
            data={[
              { name: "Enterprise Corp", score: 92, impact: "High engagement, multiple demos requested" },
              { name: "Tech Solutions", score: 85, impact: "Active in product trials" },
              { name: "Global Systems", score: 78, impact: "Recent budget approval" },
              { name: "Startup Inc", score: 65, impact: "Increasing website visits" },
              { name: "Digital Services", score: 45, impact: "Early stage evaluation" },
              { name: "Local Business", score: 32, impact: "Limited engagement" },
            ]}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Attribution Modeling</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { factor: "Email Engagement", weight: 0.3 },
              { factor: "Website Visits", weight: 0.25 },
              { factor: "Social Media", weight: 0.2 },
              { factor: "Direct Contact", weight: 0.25 },
            ].map(item => (
              <div key={item.factor} className="flex justify-between items-center">
                <span>{item.factor}</span>
                <span>{(item.weight * 100).toFixed(0)}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
