import React, {useState, useEffect} from "react";
import {createClient} from '@supabase/supabase-js'

const Supabase = ({totalStudent, setTotalStudent, setDataStudent}) => {

    const supabaseUrl = '';
    const supabaseKey = '';
    const supabase = createClient(supabaseUrl, supabaseKey)

    useEffect(async () => {

        let {data: Student, error} = await supabase
            .from('Student')
            .select('*')
        setTotalStudent(Student.length);
        console.log(Student.length);
    }, [])

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
    }, []);

    return <div></div>
}

export default Supabase;