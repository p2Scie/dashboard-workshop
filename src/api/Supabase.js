import React, {useState, useEffect} from "react";
import {createClient} from '@supabase/supabase-js'

const Supabase = ({totalStudent, setTotalStudent, setDataStudent}) => {
    const supabaseUrl = process.env["REACT_APP_SUPABASE_URL "]
    const supabaseKey = process.env["REACT_APP_SUPABASE_KEY "]
    const supabase = createClient(supabaseUrl, supabaseKey)

    useEffect(async () => {

        let {data: Student, error} = await supabase
            .from('Student')
            .select('*')

        setTotalStudent(Student.length);
        console.log(Student.length);

    })

    useEffect(async () => {
        let {data: dataStudent, error} = await supabase
            .from('Student')
            .select(`
    transport_id,
    Transport (
      id
    )
  `)
        setDataStudent(dataStudent);
    });

    return <div></div>
}

export default Supabase;