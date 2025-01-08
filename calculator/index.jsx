
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react"

export function index() {
 const [data,setdata]=useState('')




  return (
    <div className="flex justify-center min-h-screen items-center">
    <Card className="w-[330px]  bg-slate-950 text-white">
      <CardHeader>
        <CardTitle>My Calculator</CardTitle>    
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">             
              <Input className="text-right" id="name" value={data} placeholder="0" />
            </div>          
          </div>
        </form>
      </CardContent>
      <CardFooter className="grid grid-cols-2 border gap-2 h-[250px] ">
        <div className="flex flex-col space-y-6">
        <div className="flex gap-1 ">
        <Button  variant="outline" onClick={(e)=>setdata(data+e.target.value)} value='1'>1</Button>
        <Button variant="outline"onClick={(e)=>setdata(data+e.target.value)} value='2'>2</Button>
        <Button variant="outline" onClick={(e)=>setdata(data+e.target.value) } value='3'>3</Button>
        </div>
        <div className="flex gap-1">
        <Button variant="outline" onClick={(e)=>setdata(data+e.target.value)} value='4'>4</Button>
        <Button variant="outline"onClick={(e)=>setdata(data+e.target.value)} value='5'>5</Button>
        <Button variant="outline" onClick={(e)=>setdata(data+e.target.value) } value='6'>6</Button>
        </div>  
        <div className="flex gap-1">
        <Button variant="outline" onClick={(e)=>setdata(data+e.target.value)} value='7'>7</Button>
        <Button variant="outline"onClick={(e)=>setdata(data+e.target.value)} value='8'>8</Button>
        <Button variant="outline" onClick={(e)=>setdata(data+e.target.value) } value='9'>9</Button>
        </div>
        <div>
        <Button variant="outline" onClick={(e)=>setdata(data+e.target.value) } value='0'>0</Button>
        </div>
        </div>     
        
        <div className="-mt-7 ml-3 flex flex-col space-y-3  -mr-3">
        <div className="flex flex-col bg-yellow-700 "><Button variant="outline" onClick={(e)=>setdata('')} value=''>AC</Button></div>
        <div className="flex gap-1 ">
        <Button variant="outline" onClick={(e)=>setdata(eval((data)))} value='='>=</Button>
        <Button variant="outline"onClick={(e)=>setdata(data+e.target.value)} value='+'>+</Button>
        <Button variant="outline" onClick={(e)=>setdata(data+e.target.value)} value='-'>-</Button>
        </div>
        <div className="flex gap-1 ">    
        <Button variant="outline"onClick={(e)=>setdata(data+e.target.value)} value='*'>x</Button>
        <Button variant="outline" onClick={(e)=>setdata(data+e.target.value)} value='/'>: </Button>
        <Button variant="outline" onClick={(e)=>setdata(data+e.target.value)} value='.'>. </Button>
        </div> 
        </div>
               
      </CardFooter>
    </Card>
    </div>
  )
}
export default index