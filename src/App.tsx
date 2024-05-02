import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EditButton, CallButton, MessageButton, PersonButton, CancelButton, SearchButton, FuelButton} from "@/components/ui/buttons"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function App() {

  return (
    <>
      <div className="flex flex-row">
        <div className="p-10">
          <Card className="w-[500px]">
            <CardHeader className="relative">
              <CardTitle>Driver 1</CardTitle>
              <span className="absolute left-[115px] top-[-2px] text-[1.4em] ">HUBH1</span>     
              <span className="absolute left-[225px] top-[-7px] text-[30px] font-bold " ><MessageButton sz="text-[1.1em]" /></span>
              <span className="absolute left-[275px] top-[-5px] text-[23px] font-bold " ><CallButton sz="text-[1.1em]"/></span>
            </CardHeader>
            <CardContent className="relative h-[200px]">
              
                <span className="absolute left-[40px] top-[10px] font-bold">Name</span>
                <span className="absolute left-[95px] top-[10px]">HUBBEL, HAROLD</span>
                <span className="absolute left-[255px] top-[10px] font-bold">RDO</span>
                <span className="absolute left-[300px] top-[10px]">3</span>
                <span className="absolute left-[330px] top-[15px]" ><EditButton sz="text-[1.4em]"/></span>

                <span className="absolute left-[40px] top-[35px] font-bold">Home</span>
                <span className="absolute left-[95px] top-[35px]">Williamsville, NY</span>
                <span className="absolute left-[255px] top-[35px] font-bold">RDH</span>
                <span className="absolute left-[300px] top-[35px]">0</span>
                
                <span className="absolute left-[55px] top-[75px] font-bold">Driver Manager</span>
                <span className="absolute left-[195px] top-[75px]">SHANE TIMMERMAN</span>

                <span className="absolute left-[10px] top-[115px] font-bold">HOS Drive</span>
                <span className="absolute left-[95px] top-[115px]">10:46</span>
                <span className="absolute left-[205px] top-[115px] font-bold">Total Miles</span>
                <span className="absolute left-[300px] top-[115px]">1.074</span>
                             
                <span className="absolute left-[10px] top-[140px] font-bold">HOS Work</span>
                <span className="absolute left-[95px] top-[140px]">10:46</span>
                <span className="absolute left-[224px] top-[140px] font-bold">Previous</span>
                <span className="absolute left-[300px] top-[140px]">1.619</span>

                <span className="absolute left-[430px] top-[160px] text-[40px] font-bold " ><PersonButton sz="text-[1.1em]" /></span>
              
            </CardContent>
            <CardFooter>
              <p></p>
            </CardFooter>
          </Card>          
        </div>
        <div className="p-10">
            <CancelButton sz="h-9"/> 
            <br></br>
            <br></br>
            <span className="p-5"><SearchButton sz="text-[3em]"/></span>
            <br></br>
            <br></br>
            <span className="font-bold">Fuel</span>
            <span className="absolute left-[578px] top-[181px]" ><FuelButton sz="text-[1.6em]"/></span>
            <div className="h-[14px] w-[100px] border border-[#41739e]" >
              <hr className="p-0 border-0 h-[12px] w-[85px] bg-green-700"/>
            </div>
        </div>
        <div className="p-10">  
          <Tabs defaultValue="contact" className="w-[400px] border border-[#41739e]">
            <TabsList className="w-[398px] border-b border-[#41739e]">
              <TabsTrigger value="contact">Contact</TabsTrigger>
              <TabsTrigger value="route">Route</TabsTrigger>
              <TabsTrigger value="fuel">F&R</TabsTrigger>
            </TabsList>
            <TabsContent value="contact" className="p-2 h-[300px]">Check call records.</TabsContent>
            <TabsContent value="route" className="p-2 h-[300px]">This is the route line.</TabsContent>
            <TabsContent value="fuel" className="p-2 h-[300px]">This is the fuel and route requests.</TabsContent>
          </Tabs>
        </div>
        <div className="p-10">
        <div>

        <Card className="w-[501px]">
            <CardHeader className="relative">
              <CardTitle>#01 Dispatch Plan</CardTitle>
            </CardHeader>
         </Card> 
         </div>

        <div className="table border border-[#41739e] border-collapse"> 
        <Table className="w-[500px]" >
		<TableBody className=" w-[500px]">
                <TableRow className="h-[22px]">
                    <TableCell className="w-[18px] text-green-700 text-[1.1em] font-bold">✓</TableCell>    
                    <TableCell className="w-[258px] text-[#A9A9A9]">Dispatch Truck</TableCell> 
                    <TableCell className="w-[177px] text-[#A9A9A9]">Piffard, NY</TableCell> 
                </TableRow>    
                <TableRow className="h-[22px]">
                    <TableCell className="w-[18px] text-green-700 text-[1.1em] font-bold">✓</TableCell>    
                    <TableCell className="w-[258px] text-[#A9A9A9]">Rolling to Load</TableCell> 
                    <TableCell className="w-[177px] text-[#A9A9A9]">Piffard, NY</TableCell> 
                </TableRow>   
                <TableRow className="h-[22px]">
                    <TableCell className="w-[18px] text-red-600 text-[1.4em] font-bold">x</TableCell>    
                    <TableCell className="w-[258px] text-[#A9A9A9]">Fuel Stop (TA CINCINNATI SOUTH)</TableCell> 
                    <TableCell className="w-[177px] text-[#A9A9A9]">Walton, KY</TableCell> 
                </TableRow>   
                <TableRow className="h-[22px]">
                    <TableCell className="w-[18px] text-green-700 text-[1.3em]">▶</TableCell>    
                    <TableCell className="w-[258px] text-green-700 font-bold">Arrive at Shipper</TableCell> 
                    <TableCell className="w-[177px] text-green-700 font-bold">Memphis, TN</TableCell> 
                </TableRow>   
                <TableRow className="h-[22px]">
                    <TableCell className="w-[18px]"></TableCell>    
                    <TableCell className="w-[258px]">Arrive to Deliver</TableCell> 
                    <TableCell className="w-[177px]">Pearl, MS</TableCell> 
                </TableRow>   
                <TableRow className="h-[22px]">
                    <TableCell className="w-[18px]"></TableCell>    
                    <TableCell className="w-[258px]">Empty Call</TableCell> 
                    <TableCell className="w-[177px]">Pearl, MS</TableCell> 
                </TableRow> 
                <TableRow className="h-[22px]">
                    <TableCell className="w-[18px]"></TableCell>    
                    <TableCell className="w-[258px]"></TableCell> 
                    <TableCell className="w-[177px]"></TableCell> 
                </TableRow>   
                <TableRow className="h-[22px]">
                    <TableCell className="w-[18px]"></TableCell>    
                    <TableCell className="w-[258px] font-bold">Preplans</TableCell> 
                    <TableCell className="w-[177px]"></TableCell> 
                </TableRow>   
                <TableRow className="h-[22px]">
                    <TableCell className="w-[18px]"></TableCell>    
                    <TableCell className="w-[258px]">&nbsp;&nbsp;&nbsp;&nbsp;None</TableCell> 
                    <TableCell className="w-[177px]"></TableCell> 
                </TableRow>   
                <TableRow className="h-[22px]">
                    <TableCell className="w-[18px]"></TableCell>    
                    <TableCell className="w-[258px]"></TableCell> 
                    <TableCell className="w-[177px]"></TableCell> 
                </TableRow>   
                <TableRow className="h-[22px]">
                    <TableCell className="w-[18px]"></TableCell>    
                    <TableCell className="w-[258px]"></TableCell> 
                    <TableCell className="w-[177px]"></TableCell> 
                </TableRow>   
                <TableRow className="h-[22px]">
                    <TableCell className="w-[18px]"></TableCell>    
                    <TableCell className="w-[258px]"></TableCell> 
                    <TableCell className="w-[177px]"></TableCell> 
                </TableRow>   
                <TableRow className="h-[22px]">
                    <TableCell style={{width:'18px'}}></TableCell>    
                    <TableCell className="w-[258px]"></TableCell> 
                    <TableCell className="w-[177px]"></TableCell> 
                </TableRow>   
		</TableBody>
            </Table>
            
        </div>
        </div>
      </div>
    </>
  )
}

export default App
