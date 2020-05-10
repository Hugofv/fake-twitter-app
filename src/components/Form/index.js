import 'moment/locale/pt-br';

import {
  Checkbox,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  ListItemText,
  Select,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';

import Autocomplete from '@material-ui/lab/Autocomplete';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const useStyles = makeStyles(theme => ({
  label: {
    '&$focusedLabel': {
      color: '#757575',
    },
  },
  underline: {
    '&:after': {
      borderBottom: `2px solid #757575`,
    },
  },
}));

const Form = ({ fields }) => {
  const [checkedAll, setCheckedAll] = useState(false);
  const classes = useStyles({});

  return (
    <>
      {fields.map((field, index) => {
        if (field.hide) return;

        switch (field.type) {
          case 'multiple-select':
            const selectChange = e => {
              if (e.currentTarget.getAttribute('data-value') === 'all') {
                if (!checkedAll) {
                  field.handleChange(field.options.map(e => e.value));
                  setCheckedAll(true);
                } else {
                  field.handleChange([]);
                  setCheckedAll(false);
                }
                return;
              }
              return field.handleChange(e.target.value);
            };

            return (
              <Grid
                item
                key={index}
                lg={field.lg || 12}
                md={field.md || 12}
                sm={field.sm || 12}
                xs={field.xs || 12}
                alignItems="center"
              >
                <FormControl fullWidth style={{ marginTop: '1em' }}>
                  <InputLabel htmlFor={field.name}>{field.label}</InputLabel>
                  <Select
                    fullWidth
                    multiple
                    disabled={field.disabled}
                    error={!!field.error}
                    value={field.value || []}
                    name={field.name}
                    input={
                      <Input
                        fullWidth
                        id={field.name}
                        inputProps={{
                          classes: {
                            root: classes.underline,
                          },
                        }}
                      />
                    }
                    renderValue={() =>
                      (field.options || [])
                        .map(e => field.value.includes(e.value) && e.label)
                        .filter(e => e)
                        .join(', ')
                    }
                    onChange={selectChange}
                    MenuProps={MenuProps}
                  >
                    <MenuItem value="all">
                      {checkedAll ? 'Desmarcar todos' : 'Marcar todos'}
                    </MenuItem>
                    {(field.options || []).map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        <Checkbox
                          checked={
                            (field.value || []).indexOf(option.value) > -1
                          }
                        />
                        <ListItemText primary={option.label} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            );

          case 'autocomplete':
            return (
              <Grid
                item
                key={index}
                lg={field.lg || 12}
                md={field.md || 12}
                sm={field.sm || 12}
                xs={field.xs || 12}
              >
                <FormControl fullWidth style={{ marginTop: '1.2em' }}>
                  <Autocomplete
                    id="tags-standard"
                    options={field.options}
                    getOptionLabel={option => option.label}
                    style={{ width: '100%' }}
                    onChange={field.handleChange}
                    value={field.value}
                    multiple
                    noOptionsText={() => 'Nenhuma opção'}
                    renderInput={params => (
                      <TextField
                        {...params}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        error={!!field.error}
                        variant="standard"
                        label={field.label}
                        fullWidth
                      />
                    )}
                  />
                  {field.error && (
                    <FormHelperText style={{ color: '#f44336' }}>
                      {field.error}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
            );

          case 'autocomplete-single':
            return (
              <Grid
                item
                key={index}
                lg={field.lg || 12}
                md={field.md || 12}
                sm={field.sm || 12}
                xs={field.xs || 12}
              >
                <FormControl fullWidth style={{ marginTop: '1.2em' }}>
                  <Autocomplete
                    id="tags-standard"
                    options={field.options}
                    getOptionLabel={option => option.label}
                    style={{ width: '100%' }}
                    onChange={field.handleChange}
                    value={field.value}
                    noOptionsText={() => 'Nenhuma opção'}
                    renderInput={params => (
                      <TextField
                        {...params}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        error={!!field.error}
                        variant="standard"
                        label={field.label}
                        fullWidth
                      />
                    )}
                  />
                  {field.error && (
                    <FormHelperText style={{ color: '#f44336' }}>
                      {field.error}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
            );

          case 'select':
            return (
              <Grid
                item
                key={index}
                lg={field.lg || 12}
                md={field.md || 12}
                sm={field.sm || 12}
                xs={field.xs || 12}
              >
                <FormControl fullWidth style={{ marginTop: '.1em' }}>
                  <TextField
                    select
                    fullWidth
                    error={!!field.error}
                    helperText={field.error || field.helperText}
                    disabled={field.disabled}
                    style={{ marginTop: '1em' }}
                    value={field.value}
                    name={field.name}
                    onChange={field.handleChange}
                    label={field.label}
                    margin="normal"
                    InputProps={{
                      classes: {
                        root: classes.underline,
                      },
                    }}
                    InputLabelProps={{
                      shrink: true,
                      classes: {
                        root: classes.label,
                      },
                    }}
                  >
                    {(field.options || []).map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </Grid>
            );

          case 'text':
          case 'number':
            return (
              <Grid
                item
                key={index}
                lg={field.lg || 12}
                md={field.md || 12}
                sm={field.sm || 12}
                xs={field.xs || 12}
              >
                <TextField
                  fullWidth
                  InputProps={{
                    classes: {
                      root: classes.underline,
                    },
                  }}
                  InputLabelProps={{
                    shrink: true,
                    classes: {
                      root: classes.label,
                    },
                  }}
                  inputProps={{
                    maxlength: field.maxlength,
                  }}
                  error={!!field.error}
                  value={field.value || ''}
                  helperText={field.error || field.helperText}
                  multiline={field.multiline}
                  rows={field.rows}
                  disabled={field.disabled}
                  type={field.type}
                  name={field.name}
                  onChange={field.handleChange}
                  label={field.label}
                  margin="normal"
                />
              </Grid>
            );

          default:
            return null;
        }
      })}
    </>
  );
};

export default Form;
