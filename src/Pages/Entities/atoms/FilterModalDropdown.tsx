import React from "react";
import { FC } from "react";
import { FlexDiv, PaddedPaper, Space } from "../../../styledHelpers/Components";
import { FilterDropdownModalWrapper, Table, Title } from "../styles/atoms/FilterModalDropdown.style";

import { Paper, styled, Typography } from '@material-ui/core'


import ClearIcon from '@material-ui/icons/Clear';
import Selector from './Selector';
import FilterTextField from './FilterTextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';



export const FilterDropdownModal = () => {

  return (
    <PaddedPaper>
      <FlexDiv>
        <ClearIcon />
        <Typography>Where</Typography><Space></Space><Space></Space>
        <Selector startingValue='companyA' options={['companyA', 'companyB', 'companyC', 'companyD']} />
        <Space></Space>
        <Selector startingValue='optionA' options={['optionA', 'optionB', 'optionC', 'optionD']} />
        <Space></Space>
        <Space></Space>
        <FilterTextField />
      </FlexDiv>
      <FlexDiv>
        <ClearIcon />
        <Typography>Where</Typography><Space></Space><Space></Space>
        <Selector startingValue='statusA' options={['statusA', 'statusB', 'statusC', 'statusD']} />
        <Space></Space>
        <Selector startingValue='Is' options={['Is a bit', 'Is dangerously', 'Is very', 'Is fully']} />
        <Space></Space>
        <Selector startingValue='Hungry' options={['Sleepy', 'Fast', 'Blind', 'Ridiculous']} />
        <Space></Space>
        <FilterTextField />
      </FlexDiv>
      <FlexDiv>
        <ClearIcon />
        <Typography>And</Typography><Space></Space><Space></Space>
        <Selector startingValue='Contract' options={['ContractA', 'ContractB', 'ContractC', 'ContractD']} />
        <Space></Space>
        <Selector startingValue='Ends before' options={['PeriodA', 'PeriodB', 'PeriodC']} />
        <Space></Space>
        <FilterTextField />
        <Space></Space>
        <Selector startingValue='as' options={['success', 'fail', 'on hold', 'canceled']} />
        <FilterTextField />
        <Space></Space>
      </FlexDiv><br />
      <FlexDiv>
        <Button variant="contained" startIcon={<AddIcon />}>Default</Button>
        <Space></Space>
        <Selector startingValue='Choose property' options={['Choose property', '1', '2', '3']} />
      </FlexDiv>
    </PaddedPaper>
  )
}