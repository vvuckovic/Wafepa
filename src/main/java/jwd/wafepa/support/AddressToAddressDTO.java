package jwd.wafepa.support;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import jwd.wafepa.model.Address;
import jwd.wafepa.web.dto.KategorijaDTO;

@Component
public class AddressToAddressDTO implements Converter<Address, KategorijaDTO> {

	@Override
	public KategorijaDTO convert(Address address) {
		KategorijaDTO dto = new KategorijaDTO();
		
		dto.setId(address.getId());
		dto.setNumber(address.getNumber());
		dto.setStreat(address.getStreat());
		
		return dto;
	}
	
	public List<KategorijaDTO> convert(List<Address> addresss){
		List<KategorijaDTO> ret = new ArrayList<>();
		
		for(Address address : addresss){
			ret.add(convert(address));
		}
		
		return ret;
	}
}
